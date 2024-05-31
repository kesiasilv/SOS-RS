/*barra de navegação*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
/*window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}*/
/*FAQ perguntas frequentes*/
const q = document.querySelectorAll('.q');
const r = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for(let i = 0; i < q.length; i++){
    q[i].addEventListener('click', () => {
        r[i].classList.toggle('a-opened');
        arr[i].classList.toggle('arrow-rotated');
    });
}