import { iconLink, iconGithub } from './constants.js';
import useFetch from './useFetch.js';

export async function renderCards() {
  const card = document.getElementById('template-card').content,
    fragment = document.createDocumentFragment(),
    enabled = document.getElementById('enabled'),
    disabled = document.getElementById('disabled'),
    proyect = document.getElementById('proyect'),
    noImg = './assets/images/no-img.webp';

  const data = await useFetch('./assets/db/works.json');

  if (data) {
    for (const item of data) {
      card.querySelector('img').src = item.img || noImg;
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
    a.title = 'Visitar sitio';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = iconLink;
    card.getElementById('card-links').append(a);
  }

  if (item.github) {
    const a = document.createElement('a');
    a.href = item.github;
    a.title = 'Ver código';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = iconGithub;
    card.getElementById('card-links').append(a);
  }
}

export async function renderStackTech() {
  const divFrontend = document.getElementById('frontend'),
    divBackend = document.getElementById('backend');

  const data = await useFetch('./assets/db/stackTech.json');

  if (data) {
    const { frontend, backend } = data;

    for (const tech of frontend) {
      const img = document.createElement('img');
      img.src = tech.logo;
      img.alt = tech.name;
      img.title = tech.name;
      img.loading = 'lazy';
      divFrontend.appendChild(img);
    }

    for (const tech of backend) {
      const img = document.createElement('img');
      img.src = tech.logo;
      img.alt = tech.name;
      img.title = tech.name;
      img.loading = 'lazy';
      divBackend.appendChild(img);
    }
  }
}
