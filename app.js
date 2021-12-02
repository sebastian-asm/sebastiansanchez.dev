(async () => {
  const d = document,
    date = d.getElementById('date');

  date.textContent = new Date().getFullYear();

  async function getData() {
    try {
      const resp = await fetch('./src/db.json'),
        result = await resp.json();

      return result;
    } catch {
      return null;
    }
  }

  function renderCards(data) {
    const card = d.getElementById('template-card').content,
      fragment = d.createDocumentFragment(),
      enabled = d.getElementById('enabled'),
      disabled = d.getElementById('disabled'),
      proyect = d.getElementById('proyect');

    if (data) {
      data.forEach((item) => {
        const { title, description, stack, img, category } = item;

        card.querySelector('img').src = img;
        card.querySelector('img').alt = title;
        card.getElementById('title').textContent = title;
        card.getElementById('description').textContent = description;

        renderTechStack(stack, card);

        const clone = card.cloneNode(true);
        fragment.appendChild(clone);

        if (category === 'enabled') enabled.appendChild(fragment);
        if (category === 'disabled') disabled.appendChild(fragment);
        if (category === 'proyect') proyect.appendChild(fragment);
      });
    }
  }

  function renderTechStack(stack, card) {
    card.getElementById('stack').innerHTML = '';

    stack.forEach((tech) => {
      const span = d.createElement('span');
      span.textContent = tech;
      card.getElementById('stack').append(span);
    });
  }

  const data = await getData();
  renderCards(data);
})();
