const close = document.getElementById("close");
const open = document-getElementById("nav-open");
const naMenu = document.querySelector (".nav-menu");

close.addEventListener("click", function () {
    navMenu. style.right = "-400px"; // or add a class like 'hidden'
});
open. addEventListener("click", function () {
    navMenu.style.right = "0"; // or remove 'hidden'jmwntf class
});
