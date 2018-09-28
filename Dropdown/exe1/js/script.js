// EXEMPLO DE DROPDOWN 1 

var camisetasdrop = document.querySelector('.camisetasDropdown');
var moletonsdrop = document.querySelector('.moletonsDropdown');
var mangalongadrop = document.querySelector('.mangalongaDropdown');
var batasdrop = document.querySelector('.batasDropdown');
var almofadasdrop = document.querySelector('.almofadasDropdown');
var posterdrop = document.querySelector('.posterDropdown');

var catcamisetas = document.querySelector('.cat-camisetas');
var catmoletons = document.querySelector('.cat-moletons');
var catmangalongas = document.querySelector('.cat-mangalonga');
var catbatas = document.querySelector('.cat-batas');
var catalmofadas = document.querySelector('.cat-almofadas');
var catposter = document.querySelector('.cat-poster');

camisetasdrop.addEventListener('click', function () {
    catcamisetas.classList.toggle('open');
});
moletonsdrop.addEventListener('click', function () {
    catmoletons.classList.toggle('open');
});
mangalongadrop.addEventListener('click', function () {
    catmangalongas.classList.toggle('open');
});
batasdrop.addEventListener('click', function () {
    catbatas.classList.toggle('open');
});
almofadasdrop.addEventListener('click', function () {
    catalmofadas.classList.toggle('open');
});
posterdrop.addEventListener('click', function () {
    catposter.classList.toggle('open');
});