document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.img');
  const buttons = document.querySelectorAll('[data-target]');
  const gifts = ['./img/caja1.gif', './img/caja2.gif', './img/caja3.gif'];

  if (image) {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    image.src = randomGift;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      if (target) {
        window.location.href = target;
      }
    });
  });
});