'use strict';

let segundos = 0;
let minutos = 59;
let horas = 0;
let dias = 0;

setInterval(() => {
    if (segundos < 55) {
        segundos += 5;
    } else if (segundos === 55 && minutos < 59 ) {
        segundos = 0;
        minutos += 1;
    } else if (minutos === 59 && horas < 23){
        segundos = 0;
        minutos = 0;
        horas +=1;
    } else {
        segundos = 0;
        minutos = 0;
        horas = 0;
        dias +=1
    };
    console.log(`
    Dias transcurridos: ${dias}
    Horas transcurridas: ${horas}
    Minutos transcurridos: ${minutos}
    Segundos Transcurridos: ${segundos}`);
}, 5000);