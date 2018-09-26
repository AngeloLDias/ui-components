
//  DROPDOWN 

var dropdown2 = document.querySelector('.container-dropdown');
var itens2 = document.querySelector('.itens-dropdown');

dropdown2.addEventListener('click',function(){
    itens2.classList.toggle('open');
});

// Menu Hamburguer

menuHamburguer = document.querySelector('.menu-hamburguer');

var drop1 = document.querySelector('.droper1')
var drop2 = document.querySelector('.droper2')
var drop3 = document.querySelector('.droper3')

menuHamburguer.addEventListener('click', function(){
    drop1.classList.toggle('droper1Ativo');
    drop2.classList.toggle('droper2Ativo');
    drop3.classList.toggle('droper3Ativo');
});




