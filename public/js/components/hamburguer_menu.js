export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  const w = window;

  d.addEventListener('click', (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle('is-active');
      d.querySelector(panelBtn).classList.toggle('is-active');
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove('is-active');
      d.querySelector(panelBtn).classList.remove('is-active');
    }
  });

  w.addEventListener('DOMContentLoaded', (e) => {
    const $btnResponsive = d.querySelector(panelBtn);

    const { outerWidth } = w

    if (outerWidth < 768) {
      $btnResponsive.classList.remove('hidden');
    } else {
      $btnResponsive.classList.add('hidden');
    }
  });

  w.addEventListener('resize', (e) => {
    const $btnResponsive = d.querySelector(panelBtn);
    const windowResize = w.innerWidth;

    if (windowResize < 768) {
      $btnResponsive.classList.remove('hidden');
    } else {
      $btnResponsive.classList.add('hidden');
    }
  });
}
