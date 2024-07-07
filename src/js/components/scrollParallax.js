export const scrollParallax = () => {
  document.addEventListener('scroll', function (e) {
    const distance = Math.trunc(window.scrollY);
    const parallaxItems = document.querySelectorAll('[data-parallax-item]');
    const headerLogo = document.querySelectorAll('[data-scroll-fix]');

    distance > 10
      ? headerLogo.forEach((item) => item.classList.add('fix'))
      : headerLogo.forEach((item) => item.classList.remove('fix'));

    //console.log('scroll distance = ' + distance);

    parallaxItems.forEach((item) => {
      item.style.top = -distance * item.getAttribute('data-parallax-speed') + 'px';
      item.style.transition = '0.75s ease-out';
    });
  });
};
