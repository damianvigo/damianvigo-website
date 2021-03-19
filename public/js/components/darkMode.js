const d = document;
const ls = localStorage;

export default function darkMode(btn) {
  const $btnDarkMode = d.querySelector(btn);

  $btnDarkMode.addEventListener('click', () => {
    d.body.classList.toggle('dark');
    $btnDarkMode.classList.toggle('active');

    if (d.body.classList.contains('dark')) {
      ls.setItem('dark-mode', 'true');
    } else {
      ls.setItem('dark-mode', 'false');
    }
  });

  if (ls.getItem('dark-mode') === 'true') {
    d.body.classList.add('dark');
    $btnDarkMode.classList.add('active');
  } else {
    d.body.classList.remove('dark');
    $btnDarkMode.classList.remove('active');
  }
}
