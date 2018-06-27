// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}
var batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar: function () {
        console.log("...... run!!!");
    }
};
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
function reir(guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}
var ciudadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var PersonaClass = /** @class */ (function () {
    function PersonaClass() {
    }
    PersonaClass.prototype.imprimirBio = function () {
        throw new Error("Method not implemented.");
    };
    PersonaClass.prototype.hola = function () {
    };
    return PersonaClass;
}());
