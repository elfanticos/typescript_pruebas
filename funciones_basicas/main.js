"use strict";
var heroe = "Flash";
function imprime_heroe() {
    return heroe;
}
function captilizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
console.log(captilizar('PEDRO'));
function nombreCompleto(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(' ');
}
console.log(nombreCompleto('jhonatan', 'meza', 'inca'));
//# sourceMappingURL=main.js.map