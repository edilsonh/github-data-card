let container = document.querySelector("body");

function reqListener() {
  let data = JSON.parse(this.responseText);

  let template =
  `
  <section class="header" id="title-name">
    <h1>${data.name}</h1>
  </section>
  <section id="content-container" class="body">
    <section id="basics">
      <h2>The Basics</h2>
      <p>Name: <span id="full-name">${data.name}</span></p>
      <p>Github URL <span id="gh-name">${data.login}</span></p>
      <p>Company: <span id="company">${data.company}</span></p>
      <p>Website: <span id="website">${data.blog}</span></p>
    </section>
    <section id="story">
      <h2>The Story</h2>
      <p id="story-body">qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty</p>
    </section>
    <section id="avatar">
      <img src=${data.avatar_url}>

    </section>
  </section>
  `;
  container.innerHTML = template;
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
