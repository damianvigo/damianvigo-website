const d = document,
  w = window;

export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);
  const { outerWidth } = window

  w.addEventListener('scroll', (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

    if (scrollTop > 600 && outerWidth > 768) {
      $scrollBtn.classList.remove('hidden');
    } else {
      $scrollBtn.classList.add('hidden');
    }
  });

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      w.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
  });
}
