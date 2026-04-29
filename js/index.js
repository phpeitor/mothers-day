document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.img');
  const button = document.getElementById('open-animation');
  const gifts = ['./img/caja1.gif', './img/caja2.gif', './img/caja3.gif'];

  if (image) {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    image.src = randomGift;
  }

  if (button) {
    button.addEventListener('click', () => {
      window.location.href = './animate-1';
    });
  }
});