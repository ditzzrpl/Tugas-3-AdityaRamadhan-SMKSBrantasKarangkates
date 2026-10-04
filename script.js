const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body'); 

btnTema.addEventListener('click', function () { 
    bodyHalaman.classList.toggle('light-mode'); 
    if (bodyHalaman.classList.contains('light-mode')) { 
        btnTema.textContent = ' 🌙 Mode Gelap'; 
    } else { 
        btnTema.textContent = ' ☀ Mode Terang'; 
    } 
});
const btnBukaModal = document.querySelector('#btnKontak'); 
const elemenModal = document.querySelector('#modalKontak'); 
const btnTutupModal = document.querySelector('#btnTutupModal'); 

btnBukaModal.addEventListener('click', function (event) { 
    event.preventDefault(); elemenModal.classList.add('show'); 
}); 
btnTutupModal.addEventListener('click', function () { 
    elemenModal.classList.remove('show'); 
});

const btnBukaInfo = document.querySelector('.btn-info');
const elemenInfo = document.querySelector('#modalInfo');
const btnTutupInfo = document.querySelector('#btnTutupModalInfo');

btnBukaInfo.addEventListener('click', function (event) {
    event.preventDefault();
    elemenInfo.classList.add('show');
});
btnTutupInfo.addEventListener('click', function () {
    elemenInfo.classList.remove('show');
});