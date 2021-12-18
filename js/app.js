import { iconMoon, iconSun } from './constants.js';
import { renderCards } from './renders.js';
import themeHandler from './themeMode.js';

(() => {
  function App() {
    const date = document.getElementById('date'),
      themeMode = document.getElementById('theme-mode');

    if (localStorage.getItem('theme')) {
      document.body.classList.add('dark-mode');
      document.getElementById('theme-mode').innerHTML = iconSun;
    } else {
      document.getElementById('theme-mode').innerHTML = iconMoon;
    }

    renderCards();
    date.textContent = new Date().getFullYear();
    themeMode.addEventListener('click', themeHandler);
  }

  // app
  document.addEventListener('DOMContentLoaded', App);
})();
