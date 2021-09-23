window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function Togglemenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navegação = document.querySelector('.navegação');
    menuToggle.classList.toggle('active');
    navegação.classList.toggle('active');
}
