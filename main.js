let nameTitle = document.getElementById("title-name");
let basicsName = document.getElementById("full-name");


function reqListener() {
  let data = JSON.parse(this.responseText);
  let name = document.createTextNode(data.name);
  let name2 = document.createTextNode(data.name);
  nameTitle.appendChild(name);
  basicsName.appendChild(name2);



  console.log(data.html_url);

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
