document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.img');
    const buttons = document.querySelectorAll('[data-target]');
    const gifts = ['./img/caja1.gif', './img/caja2.gif', './img/caja3.gif'];
    const transitionDelay = 1800;

    if (image) {
        const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
        image.src = randomGift;
    }

    buttons.forEach((button) => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            button.style.setProperty('--x', ((e.clientX - rect.left) / rect.width * 100) + '%');
            button.style.setProperty('--y', ((e.clientY - rect.top) / rect.height * 100) + '%');
        });

        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);

            createParticles(e.clientX, e.clientY);

            button.classList.add('is-clicked');

            const target = button.getAttribute('data-target');
            if (target) {
                document.body.classList.add('is-transitioning');
                createHeartTransition(e.clientX, e.clientY);
                buttons.forEach((currentButton) => {
                    currentButton.disabled = true;
                });

                setTimeout(() => {
                    window.location.href = target;
                }, transitionDelay);
            }
        });
    });

    function createParticles(x, y) {
        const colors = ['#ff85a1', '#fbbf24', '#ff6b9d', '#ffd2a1', '#ffb9cf', '#fff2c8', '#ff4d6d', '#f9a8d4'];
        const particleCount = 28;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const angle = (360 / particleCount) * i + (Math.random() * 30 - 15);
            const distance = 180 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.7;
            const tx = Math.cos(angle * Math.PI / 180) * distance;
            const ty = Math.sin(angle * Math.PI / 180) * distance;
            particle.style.setProperty('--tx', tx + 'px');
            particle.style.setProperty('--ty', ty + 'px');
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            const size = 6 + Math.random() * 12;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.animationDuration = (1.2 + Math.random() * 0.8) + 's';
            particle.style.animationDelay = (Math.random() * 0.15) + 's';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 2200);
        }
    }

    function createHeartTransition(x, y) {
        const heart = document.createElement('img');
        const farthestX = Math.max(x, window.innerWidth - x);
        const farthestY = Math.max(y, window.innerHeight - y);
        const requiredRadius = Math.hypot(farthestX, farthestY);
        const scale = Math.ceil(requiredRadius / 56) + 4;

        heart.className = 'heart-transition';
        heart.src = './img/corazon.svg';
        heart.alt = '';
        heart.setAttribute('aria-hidden', 'true');
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.setProperty('--heart-scale', scale);
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), transitionDelay + 200);
    }

    // ===================== Logo Lightbox =====================
    (function () {
        const logoEl = document.querySelector('.logo');
        if (!logoEl) return;
        const logoImg = logoEl.querySelector('.box img');
        if (!logoImg) return;

        logoEl.addEventListener('click', function () {
            if (document.querySelector('.logo-lightbox')) {
                return;
            }

            const rect = logoEl.getBoundingClientRect();
            const logoCX = rect.left + rect.width / 2;
            const logoCY = rect.top + rect.height / 2;
            const vpCX = window.innerWidth / 2;
            const vpCY = window.innerHeight / 2;
            const dx = logoCX - vpCX;
            const dy = logoCY - vpCY;

            const overlay = document.createElement('div');
            overlay.className = 'logo-lightbox';
            overlay.style.setProperty('--lbx', dx + 'px');
            overlay.style.setProperty('--lby', dy + 'px');

            const img = document.createElement('img');
            img.src = logoImg.src;
            img.className = 'logo-lightbox__img';
            img.alt = 'Logo';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'logo-lightbox__close';
            closeBtn.setAttribute('aria-label', 'Cerrar');
            closeBtn.innerHTML = '&times;';

            overlay.appendChild(img);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    overlay.classList.add('logo-lightbox--open');
                });
            });

            function onKey(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            }

            function closeLightbox() {
                document.removeEventListener('keydown', onKey);
                overlay.classList.remove('logo-lightbox--open');
                overlay.classList.add('logo-lightbox--closing');
                window.setTimeout(function () {
                    overlay.remove();
                }, 420);
            }

            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                closeLightbox();
            });

            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeLightbox();
            });

            document.addEventListener('keydown', onKey);
        });
    }());
});
