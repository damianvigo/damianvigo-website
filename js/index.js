import darkMode from './components/darkMode.js'
import stickyFooter from './components/sticky_footer.js'
import hamburguerMenu from './components/hamburguer_menu.js'
import scrollTopButton from './components/scroll-boton.js'
import searchFilters from './components/search_filter.js';
import validationForm from './components/validation_form.js'

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', (e) => {
  darkMode('#switch');
  stickyFooter('.header');
  searchFilters('.card-filter-input', '.cards-filter__card')
  scrollTopButton('.scroll-top-btn');
  validationForm();
});

hamburguerMenu('.panel-btn', '.panel', '.panel__menu-a');

const overlay = document.getElementById('overlay');
d.querySelectorAll('.cards-filter__img').forEach((el) => {
  el.addEventListener('click', () => {
    const rute = el.getAttribute('src');
    const description = el.parentNode.dataset.description;
    overlay.classList.add('active');
    d.querySelector('.overlay__img').src = rute;
    d.querySelector('.overlay__description').innerHTML = description;
  });
});

d.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
  overlay.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
  // overlay.classList.remove('active');
  e.target.id === 'overlay' ? overlay.classList.remove('active') : '';
});
