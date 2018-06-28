// import * as textos from './textos';
// import numeros from './numeros';
// console.log(numeros(10,15));
// console.log(textos.obtenerError(1));
// function regresar<T>(arg:T):T {
//     return arg;
// }
// console.log(regresar('hola').charAt(1));
// console.log(regresar(14.3445).toFixed());
// console.log(regresar(new Date()).toLocaleString());
/*************************************FUNCION GENERICA*******************/
// function generica<T>(arg:T):T {
//     return arg;
// }
// type HeroeGen = {
//     nombre:string;
//     nombreReal:string;
// }
// type Villano = {
//     nombre:string;
//     poder:string;
// }
// let deadpool  = {
//     nombre : 'Deadpool',
//     nombreReal:'Wade Winston Wilson',
//     poder : 'Regeneración'
// }
// console.log(generica<Villano>(deadpool));
/*************************************CLASES GENERICAS*******************/
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return this.base * this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
