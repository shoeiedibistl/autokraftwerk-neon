export const myCursor = () => {
  const myCursorLement = document.querySelector('[data-cursor-element]');
  const myLinks = document.querySelectorAll('[data-clickable-element]');

  document.addEventListener('mousemove', function (event) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    myCursorLement.style.top = cursorY + 'px';
    myCursorLement.style.left = cursorX + 'px';
  });

  document.addEventListener('mouseout', function () {
    myCursorLement.style.width = '0px';
    myCursorLement.style.height = '0px';
    myCursorLement.style.opacity = '0';
  });

  document.addEventListener('mouseover', function () {
    myCursorLement.style.width = '';
    myCursorLement.style.height = '';
    myCursorLement.style.opacity = '';
  });

  myLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      myCursorLement.style.width = '5.5rem';
      myCursorLement.style.height = '5.5rem';
    });

    link.addEventListener('mouseout', () => {
      myCursorLement.style.width = '';
      myCursorLement.style.height = '';
    });
  });
};
