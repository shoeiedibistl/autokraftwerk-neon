export const stopAnim = () => {
  const stopBtn = document.querySelector('button.stop-anim');
  const preloader = document.querySelector('.preloader');
  const preloaderItems = preloader.querySelectorAll('[data-preloader-item]');

  console.log(preloaderItems);

  //  stopBtn.addEventListener('click', () => {

  document.addEventListener('DOMContentLoaded', function () {
    console.log('stop anim');

    preloaderItems.forEach((item) => {
      item.style.animationIterationCount = '1';

      Promise.all(
        item.getAnimations({ subtree: true }).map((animation) => animation.finished)
      ).then(() => item.classList.add('fix'));

      //  item.getAnimations.forEach((anim, i, arr) => {
      //    if (i == 1) anim.onfinish = () => item.classList.add('fix');
      //  });

      //item.addEventListener('transitionend', item.classList.add('fix'));
    });
  });
};
