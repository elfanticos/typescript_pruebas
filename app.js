"use strict";
var flash = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'viaja por el tiempo', 230],
    getNombre: function () {
        return this.nombre;
    }
};
var superman = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Puede volar', 'Super velocidad', 223],
    getNombre: function () {
        return this.nombre;
    }
};
function prueba(data) {
    console.log(data.getNombre());
}
prueba({
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Puede volar', 'Super velocidad', 223],
    getNombre: function () {
        return this.nombre;
    }
});
