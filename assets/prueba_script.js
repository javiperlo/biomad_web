// script.js

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var normalLogo = document.querySelector(".nav__logo");
    var stickyLogo = document.querySelector(".sticky-logo");
    header.classList.toggle("sticky", window.scrollY > 0);
    if (window.scrollY > 0) {
        normalLogo.style.display = "inline-block";
        stickyLogo.style.display = "none";
    } else {
        normalLogo.style.display = "none";
        stickyLogo.style.display = "inline-block";
    }
});
