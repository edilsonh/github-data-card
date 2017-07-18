let nameTitle = document.getElementById("title-name");
let basicsName = document.getElementById("full-name");
let ghName = document.getElementById("gh-name");
let comp = document.getElementById("company");
let webs = document.getElementById("website");
let pic = document.getElementById("avatar")

function reqListener() {
  let data = JSON.parse(this.responseText);
  nameTitle.innerHTML = `<h1>${data.name}</h1>`;
  basicsName.innerHTML = `${data.name}`;
  ghName.innerHTML = `${data.login}`;
  comp.innerHTML = `${data.company}`;
  webs.innerHTML = `${data.blog}`;
  pic.innerHTML = `<img src=${data.avatar_url}>`
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
