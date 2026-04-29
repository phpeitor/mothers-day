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
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      if (target) {
        document.body.classList.add('is-transitioning');
        buttons.forEach((currentButton) => {
          currentButton.disabled = true;
        });

        setTimeout(() => {
          window.location.href = target;
        }, transitionDelay);
      }
    });
  });
});