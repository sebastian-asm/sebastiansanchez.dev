import { iconLink, iconGithub } from './constants.js';
import useFetch from './useFetch.js';

export async function renderCards() {
  const card = document.getElementById('template-card').content,
    fragment = document.createDocumentFragment(),
    enabled = document.getElementById('enabled'),
    disabled = document.getElementById('disabled'),
    proyect = document.getElementById('proyect');

  const data = await useFetch('./assets/db/works.json');

  if (data) {
    for (const item of data) {
      card.querySelector('img').src = item.img;
      card.querySelector('img').alt = item.title;
      card.getElementById('title').textContent = item.title;
      card.getElementById('description').textContent = item.description;

      renderLinks(item, card);
      renderTechStack(item.stack, card);

      const clone = card.cloneNode(true);
      fragment.appendChild(clone);

      if (item.category === 'enabled') enabled.appendChild(fragment);
      if (item.category === 'disabled') disabled.appendChild(fragment);
      if (item.category === 'proyect') proyect.appendChild(fragment);
    }
  }
}

function renderTechStack(stack, card) {
  card.getElementById('stack').innerHTML = '';

  for (const tech of stack) {
    const span = document.createElement('span');
    span.textContent = tech;
    card.getElementById('stack').appendChild(span);
  }
}

function renderLinks(item, card) {
  card.getElementById('card-links').innerHTML = '';

  if (item.web) {
    const a = document.createElement('a');
    a.href = item.web;
    a.title = 'Abrir';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = iconLink;
    card.getElementById('card-links').append(a);
  }

  if (item.github) {
    const a = document.createElement('a');
    a.href = item.github;
    a.title = 'Github';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = iconGithub;
    card.getElementById('card-links').append(a);
  }
}
