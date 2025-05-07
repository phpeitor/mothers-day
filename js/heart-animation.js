window.requestAnimationFrame =
window.__requestAnimationFrame ||
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
(function () {
  return function (callback, element) {
    let lastTime = element.__lastTime;
    if (lastTime === undefined) {
      lastTime = 0;
    }
    let currTime = Date.now();
    let timeToCall = Math.max(1, 33 - (currTime - lastTime));
    window.setTimeout(callback, timeToCall);
    element.__lastTime = currTime + timeToCall;
  };
})();
window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));
let loaded = false;
let init = function () {
if (loaded) return;
loaded = true;
let mobile = window.isDevice;
let koef = mobile ? 0.5 : 1;
let canvas = document.getElementById('heart');
let ctx = canvas.getContext('2d');
let width = canvas.width = koef * innerWidth;
let height = canvas.height = koef * innerHeight;
let rand = Math.random;
ctx.fillStyle = "rgba(0,0,0,1)";
ctx.fillRect(0, 0, width, height);

let heartPosition = function (rad) {
  //return [Math.sin(rad), Math.cos(rad)];
  return [Math.pow(Math.sin(rad), 3), -(15 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad))];
};
let scaleAndTranslate = function (pos, sx, sy, dx, dy) {
  return [dx + pos[0] * sx, dy + pos[1] * sy];
};

window.addEventListener('resize', function () {
  width = canvas.width = koef * innerWidth;
  height = canvas.height = koef * innerHeight;
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, width, height);
});

let traceCount = mobile ? 20 : 50;
let pointsOrigin = [];
let i;
let dr = mobile ? 0.3 : 0.1;
for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 210, 13, 0, 0));
for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 150, 9, 0, 0));
for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(heartPosition(i), 90, 5, 0, 0));
let heartPointsCount = pointsOrigin.length;

let targetPoints = [];
let pulse = function (kx, ky) {
  for (i = 0; i < pointsOrigin.length; i++) {
    targetPoints[i] = [];
    targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
    targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
  }
};

let e = [];
for (i = 0; i < heartPointsCount; i++) {
  let x = rand() * width;
  let y = rand() * height;
  e[i] = {
    vx: 0,
    vy: 0,
    R: 2,
    speed: rand() + 5,
    q: ~~(rand() * heartPointsCount),
    D: 2 * (i % 2) - 1,
    force: 0.2 * rand() + 0.7,
    f: "hsla(0," + ~~(40 * rand() + 60) + "%," + ~~(60 * rand() + 20) + "%,.3)",
    trace: []
  };
  for (let k = 0; k < traceCount; k++) e[i].trace[k] = { x: x, y: y };
}
let config = {
  traceK: 0.4,
  timeDelta: 0.01
};

let time = 0;
let loop = function () {
  let n = -Math.cos(time);
  pulse((1 + n) * .5, (1 + n) * .5);
  time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelta;
  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, width, height);
  for (i = e.length; i--;) {
    var u = e[i];
    var q = targetPoints[u.q];
    var dx = u.trace[0].x - q[0];
    var dy = u.trace[0].y - q[1];
    var length = Math.sqrt(dx * dx + dy * dy);
    if (10 > length) {
      if (0.95 < rand()) {
        u.q = ~~(rand() * heartPointsCount);
      } else {
        if (0.99 < rand()) {
          u.D *= -1;
        }
        u.q += u.D;
        u.q %= heartPointsCount;
        if (0 > u.q) {
          u.q += heartPointsCount;
        }
      }
    }
    u.vx += -dx / length * u.speed;
    u.vy += -dy / length * u.speed;
    u.trace[0].x += u.vx;
    u.trace[0].y += u.vy;
    u.vx *= u.force;
    u.vy *= u.force;
    for (k = 0; k < u.trace.length - 1;) {
      let T = u.trace[k];
      let N = u.trace[++k];
      N.x -= config.traceK * (N.x - T.x);
      N.y -= config.traceK * (N.y - T.y);
    }
    ctx.fillStyle = u.f;
    for (k = 0; k < u.trace.length; k++) {
      ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
    }
  }
  ctx.fillStyle = "rgba(255,255,255,1)";
  for (i = u.trace.length + 13; i--;) ctx.fillRect(targetPoints[i][0], targetPoints[i][1], 2, 2);

  window.requestAnimationFrame(loop, canvas);
};
loop();
};

let s = document.readyState;
if (s === 'complete' || s === 'loaded' || s === 'interactive') init();
else document.addEventListener('DOMContentLoaded', init, false);