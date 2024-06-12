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
/*const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 300,
    reset: true
});

sr.reveal(`.section-subtitle, .section-title,
    .quehacemos__icon, .quehacemos__title, .quehacemos__description,
    .stat__number, .stat__description,
    .image-chooseus, .text h1, .sub-section h3, .sub-section p,
    .image-solutions, .text h1, .sub-section h3, .sub-section p,
    .contact__initial, .contact__description, .button`, {
interval: 50
});*/

/* Cerramos y abrimos el menu*/

const menuToggle = document.getElementById('nav-toggle');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuToggle.addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
    navMenu.classList.toggle('active'); // toggle the 'active' class
});