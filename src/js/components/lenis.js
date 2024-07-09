import Lenis from 'lenis';

let lenis = 0;
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const initLenis = () => {
  //  if (window.screen.width > 1200 && !is_safari) {
  if (window.screen.width > 1200) {
    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    //Для того чтобы работали якоря с библиотекой
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href')?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
};

export function stopLenis() {
  if (window.screen.width > 1200 && !is_safari) {
    lenis.stop();
  }
}

export function resumeLenis() {
  if (window.screen.width > 1200 && !is_safari) {
    lenis.start();
  }
}
