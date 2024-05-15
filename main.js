/*==================== DESPLEGAR EL  MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== CAMBIAR EL LOGO AL SCROLLEAR ABAJO ====================*/

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

/*==================== ANIMACION SCROLEAR (QUITAR SI NO GUSTA) ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '120px',
    duration: 250,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 50
})