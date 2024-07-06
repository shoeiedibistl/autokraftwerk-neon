export const scrollParallax = () => {
  document.addEventListener('scroll', function (e) {
    const distance = Math.trunc(window.scrollY);
    const parallaxItems = document.querySelectorAll('[data-parallax-item]');

    console.log('scroll distance = ' + distance);

    parallaxItems.forEach((item) => {
      item.style.top = -distance * item.getAttribute('data-parallax-speed') + 'px';
      item.style.transition = '1s ease-out';
    });
  });
};
