(async () => {
  const d = document,
    date = d.getElementById('date'),
    enabled = d.getElementById('enabled'),
    disabled = d.getElementById('disabled'),
    proyect = d.getElementById('proyect'),
    dark = d.getElementById('dark');

  // header
  dark.addEventListener('click', () => {
    console.log('clic!');
    localStorage.setItem('dark-mode', 'ok');
  });

  // main
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
      const { web, img, category } = item;
      let article = d.createElement('article');

      article.innerHTML = `
        <p>${web}</p>
        <img src="${img}" style="width: 120px" />
      `;

      if (category === 'enabled') enabled.appendChild(article);
      if (category === 'disabled') disabled.appendChild(article);
      if (category === 'proyect') proyect.appendChild(article);
    });
  }

  // footer
  date.textContent = new Date().getFullYear();
})();
