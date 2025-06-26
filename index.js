const close = document.getElementById("close");
const open = document - getElementById("open");
const navMenu = document.getElementById("res-nav");

close.addEventListener("click", function () {
  navMenu.style.right = "-400px"; // or add a class like 'hidden'
});
open.addEventListener("click", function () {
  navMenu.style.right = "0"; // or remove 'hidden'jmwntf class
});
