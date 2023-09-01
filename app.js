'use strict';

const forma1 = document.getElementById('forma1');
const forma2 = document.getElementById('forma2');
const forma3 = document.getElementById('forma3'); 
const forma4 = document.getElementById('forma4'); 
const forma5 = document.getElementById('forma5'); 
const forma6 = document.getElementById('forma6'); 
const forma7 = document.getElementById('forma7'); 
const forma8 = document.getElementById('forma8'); 

// Professor
forma1.addEventListener('click', mudarCor);
forma2.addEventListener('click', mudarForma);
 // Professor


forma3.addEventListener('click', trapezio);
forma4.addEventListener('click', girarForma);
forma5.addEventListener('click', pularForma);
forma6.addEventListener('click', girarVerticalForma);
forma7.addEventListener('click', alternarVisibilidade);
forma8.addEventListener('click', pulsarForma);

function mudarCor() {
    forma1.classList.toggle('branco');
}

function mudarForma() {
    this.classList.toggle('circulo'); 
}

function trapezio() {
    forma3.classList.toggle('trapezio');
}


function girarForma() {
    forma4.classList.toggle('girando'); 
}

function pularForma() {
    forma5.classList.add('pulando'); 
   
}

function girarVerticalForma() {
    forma6.classList.toggle('girando-vertical'); 
}
function alternarVisibilidade() {
    forma7.classList.toggle('invisivel'); 
}

function pulsarForma() {
    forma8.classList.toggle('pulsando'); 
}
