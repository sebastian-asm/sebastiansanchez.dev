(async () => {
  const d = document,
    date = d.getElementById('date'),
    enabled = d.getElementById('enabled'),
    disabled = d.getElementById('disabled'),
    proyect = d.getElementById('proyect');

  // footer
  date.textContent = new Date().getFullYear();

  const getData = async () => {
    try {
      const resp = await fetch('./src/db.json'),
        result = await resp.json();
      return result;
    } catch {
      return null;
    }
  };

  const data = await getData();

  console.log(data);

  if (data) {
    data.forEach((item) => {
      let article = d.createElement('article');

      if (item.category === 'enabled') {
        article.innerHTML = `
          <p>${item.web}</p>
        `;

        // <img src="${item.screenshot}" />
        //   <ul>
        //   ${item.stack.map((tech) => `<li>${tech}</li>`)}
        // </ul>
        enabled.appendChild(article);
      }

      if (item.category === 'disabled') {
        article.innerHTML = `<p>${item.web}</p>`;
        disabled.appendChild(article);
      }

      if (item.category === 'proyect') {
        article.innerHTML = `<p>${item.web}</p>`;
        proyect.appendChild(article);
      }
    });
  }
})();
