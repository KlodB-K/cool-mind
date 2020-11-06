import "../styles/styles.scss"

if (process.env.NODE_ENV === "development") {
  require("../index.html")
}

console.log("Hello")

window.onload = init;
function init() {
  var button = document.getElementById("hamburger");
  button.onclick = handleButtonClick;
}
showMenu();
function handleButtonClick() {
  var menu = document.getElementById("menu");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
