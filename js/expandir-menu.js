const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    //se  exister a classe expandir remova
    //se nao existir adicione
})