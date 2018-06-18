"use strict";
var heroe2 = 'Ricardo Tapia (Robin)';
var edad = 30;
var mensaje = imprimir(heroe2, edad);
console.log(mensaje);
function imprimir(heroe, edad) {
    heroe2 = heroe2.toLowerCase();
    edad = edad + 10;
    return heroe2 + ' ' + edad;
}
