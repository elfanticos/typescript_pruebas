var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this.nombre = "Antman";
        this.nombre = nombre;
        console.log('Se ejecuto el constructor');
    }
    return Avenger;
}());
var antman = new Avenger('pepa');
console.log(antman);
