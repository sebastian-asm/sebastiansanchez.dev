import { iconMoon, iconSun } from './constants.js';

export default function themeHandler() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-mode').innerHTML = iconSun;
  } else {
    localStorage.removeItem('theme');
    document.getElementById('theme-mode').innerHTML = iconMoon;
  }
}
