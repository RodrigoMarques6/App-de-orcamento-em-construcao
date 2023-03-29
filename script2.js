const ativar = document.querySelector('#ativar');
const modal = document.querySelector('#modal')

ativar.addEventListener('click', function () {
    modal.classList.toggle('animar')
});