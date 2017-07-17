function reqListener() {
  let data = JSON.parse(this.responseText);
  console.log(data.name);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/edilsonh");
req.addEventListener("load", reqListener);
req.send();
