import "../styles/styles.scss"

if (process.env.NODE_ENV === "development") {
  require("../index.html")
}

console.log("Hello")

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

  const btn = document.querySelector("contact-btn")
  btn.addEventListener("click", "keyup", function(event) {
    if (event.keyCode === 13) {
    }
  })
writeThanks();
function thanksForSubmit() {
  document.querySelector("form").innerHTML = `
    <div class ="thanks">
      <p>Thanks! Check your mailbox!</p>
    </div>
    `;
};


