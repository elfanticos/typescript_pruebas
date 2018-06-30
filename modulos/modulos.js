// import * as textos from './textos';
// import numeros from './numeros';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// class Cuadrado {
//     base;
//     altura;
//     area():number {
//         return this.base * this.altura;
//     }
// }
// let cuadrado = new Cuadrado();
// cuadrado.base = 10;
// cuadrado.altura = 10;
// console.log(cuadrado.area());
/*************************************DECORADORES*******************/
// function consola(constructor:Function) {
//     console.log(constructor);
// }
// @consola
// class Villano {
//     constructor(public nombre:string) {
//     }
// }
/*************************************DECORADORES DE METODOS*******************/
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable)
            console.warn('No me harán cambiar de opión');
        descriptor.writable = esEditable;
    };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log('Es dominar el mundo');
    };
    __decorate([
        editable(false)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var lex = new Villano('Lex Luthor');
lex.plan = function () {
    console.log('Es cortar flores');
};
lex.plan();
