let nameHolder = document.getElementById("title-name");
function reqListener() {
  let data = JSON.parse(this.responseText);
  let name = document.createTextNode(data.name);
  let h1Name = document.createElement("h1");
  h1Name.appendChild(name);
  nameHolder.appendChild(h1Name);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
