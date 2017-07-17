let nameHolder = document.getElementById("title-name");
let basicsName = document.getElementById("full-name");
function reqListener() {
  let data = JSON.parse(this.responseText);
  let name = document.createTextNode(data.name);
  let h1Name = document.createElement("h1");
  h1Name.appendChild(name);
  nameHolder.appendChild(h1Name);
  basicsName.appendChild(name);

  

  console.log(data.html_url);

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
