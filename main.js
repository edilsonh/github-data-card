let nameTitle = document.getElementById("title-name");
let basicsName = document.getElementById("full-name");
let ghName = document.getElementById("gh-name");
let comp = document.getElementById("company");
let webs = document.getElementById("website");
let pic = document.getElementById("avatar")

function reqListener() {
  let data = JSON.parse(this.responseText);
  let name = document.createTextNode(data.name);
  let name2 = document.createTextNode(data.name);
  nameTitle.appendChild(name);
  basicsName.appendChild(name2);

  let githubName = document.createTextNode(data.login);
  ghName.appendChild(githubName);

  let company = document.createTextNode(data.company);
  comp.appendChild(company);

  let website = document.createTextNode(data.blog);
  webs.appendChild(website);

  let image = document.createElement("img");
  let avatar = document.createTextNode(data.avatar_url);
  image.setAttribute("src", data.avatar_url);
  pic.appendChild(image);
  console.log(data.avatar_url);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
