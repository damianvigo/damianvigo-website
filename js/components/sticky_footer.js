const d = document,
  w = window;

export default function sticky(header) {
  const $head = d.querySelector(header);

  w.addEventListener('scroll', (e) => {
    $head.classList.toggle('sticky', w.scrollY > 0);
  });
}