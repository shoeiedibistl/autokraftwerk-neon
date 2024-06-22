export const stopAnim = () => {
  const preloader = document.querySelector('.preloader');
  const preloaderItems = preloader.querySelectorAll('[data-preloader-item]');
  const loadingScale = preloader.querySelector('.preloader__scale-loading');
  const myPage = document.querySelector('body.body');
  const animOnLoad = document.querySelectorAll('[data-page-loaded="start-anim"]');
  let counter = 0;

  document.addEventListener('DOMContentLoaded', function () {
    preloaderItems.forEach((item) => {
      item.style.animationIterationCount = '1';

      Promise.all(
        item.getAnimations({ subtree: true }).map((animation) => animation.finished)
      ).then(() => {
        item.classList.add('fix');
        counter += 1;
        if (counter === preloaderItems.length) {
          loadingScale.classList.add('loaded');
          setTimeout(() => {
            myPage.classList.add('loaded');
            //            preloader.style.opacity = '0';
            setTimeout(() => {
              animOnLoad.forEach((item) => item.classList.remove('pause-animation'));
            }, 300);
          }, 3000);
        }
      });
    });
  });
};
