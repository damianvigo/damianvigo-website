const d = document,
  w = window;

export default function stickyHeader(header) {
  const $head = d.querySelector(header);

  w.addEventListener('scroll', (e) => {
    $head.classList.toggle('sticky', w.scrollY > 0);
  });
}
