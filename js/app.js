import { icon } from './constants.js';

(() => {
  const d = document,
    date = d.getElementById('date'),
    themeMode = d.getElementById('theme-mode');

  date.textContent = new Date().getFullYear();

  async function getData() {
    try {
      const resp = await fetch('./assets/db/db.json'),
        result = await resp.json();
      return result;
    } catch {
      return null;
    }
  }

  async function renderCards() {
    const card = d.getElementById('template-card').content,
      fragment = d.createDocumentFragment(),
      enabled = d.getElementById('enabled'),
      disabled = d.getElementById('disabled'),
      proyect = d.getElementById('proyect');

    const data = await getData();

    if (data) {
      data.forEach((item) => {
        card.querySelector('img').src = item.img;
        card.querySelector('img').alt = item.title;
        card.getElementById('title').textContent = item.title;
        card.getElementById('description').textContent = item.description;

        renderTechStack(item.stack, card);

        const clone = card.cloneNode(true);
        fragment.appendChild(clone);

        if (item.category === 'enabled') enabled.appendChild(fragment);
        if (item.category === 'disabled') disabled.appendChild(fragment);
        if (item.category === 'proyect') proyect.appendChild(fragment);
      });
    }
  }

  function renderTechStack(stack, card) {
    card.getElementById('stack').innerHTML = '';
    stack.forEach((tech) => {
      const span = d.createElement('span');
      span.textContent = tech;
      card.getElementById('stack').appendChild(span);
    });
  }

  function themeHandler() {
    let theme;
    const { matches } = matchMedia('(prefers-color-scheme: dark)');

    if (matches) {
      d.body.classList.toggle('light-mode');
      theme = d.body.classList.contains('light-mode') ? 'light' : 'dark';
    } else {
      d.body.classList.toggle('dark-mode');
      theme = d.body.classList.contains('dark-mode') ? 'dark' : 'light';
    }

    localStorage.setItem('theme', theme);
  }

  function initialApp() {
    const localConfig = localStorage.getItem('theme');
    if (localConfig === 'light') d.body.classList.toggle('light-mode');
    if (localConfig === 'dark') d.body.classList.toggle('dark-mode');

    renderCards();
  }

  // app
  d.addEventListener('DOMContentLoaded', initialApp);
  themeMode.addEventListener('click', themeHandler);
})();
