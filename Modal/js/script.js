var modal = document.querySelector('.container-modal');

var openmodal = document.querySelector('.open-modal');

var fechamodal = document.querySelector('.back-modal');

openmodal.addEventListener('click', function () {
    modal.classList.toggle('openmodal');
    // conmodal.classList.toggle('open');
});

openmodal.addEventListener('click', function () {
    fechamodal.classList.add('open');

});

fechamodal.addEventListener('dblclick', function(){
    modal.classList.remove('openmodal');
    fechamodal.classList.remove('open');
})