export const stopAnim = () => {
  const stopBtn = document.querySelector('button.stop-anim');
  const preloader = document.querySelector('.preloader');
  const preloaderItems = preloader.querySelectorAll('[data-preloader-item]');
  const loadingScale = preloader.querySelector('.preloader__scale-loading');
  let counter = 0;

  document.addEventListener('DOMContentLoaded', function () {
    preloaderItems.forEach((item) => {
      item.style.animationIterationCount = '1';

      Promise.all(
        item.getAnimations({ subtree: true }).map((animation) => animation.finished)
      ).then(() => {
        item.classList.add('fix');
        counter += 1;
        if (counter === preloaderItems.length) loadingScale.classList.add('loaded');
      });
    });
  });
};
