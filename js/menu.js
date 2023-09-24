const menuItem = document.querySelectorAll('.item-menu');
// guarda todos os elementos que tem a class item-menu

function selectLink(){
    menuItem.forEach((item)=>{ //Remove dinâmicamente uma classe de um objeto não clicado
        item.classList.remove('ativo'); 
    })
    this.classList.add('ativo'); //adiciona ao objeto clicado
}

menuItem.forEach((item)=>{
    item.addEventListener('click', selectLink);
    //Verificar sempre que o user clicar 
});

