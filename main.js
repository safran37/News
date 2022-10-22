const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-bar");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  menu.style.display = "block";
});

close.addEventListener("click", () => {
  menu.style.display = "none";
});
