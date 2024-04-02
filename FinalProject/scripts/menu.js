const hamMenu = document.querySelector(".icon");
const myTopNav = document.getElementById("myTopnav");

hamMenu.addEventListener("click",HamMenu);

function HamMenu() {
    if (myTopNav.className === "topnav") {
      myTopNav.className += " responsive";
    } else {
      myTopNav.className = "topnav";
    }
  }