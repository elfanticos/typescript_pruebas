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

function editable(esEditable:boolean) {
    return function(target:any, nombrePropiedad:string, descriptor:PropertyDescriptor) {
        if(!esEditable)
            console.warn('No me harán cambiar de opión');
        
        descriptor.writable = esEditable;
    }
}
class Villano {
    constructor(public nombre:string) {}
    @editable(false)
    plan() {
        console.log('Es dominar el mundo');
    }
}

let  lex = new Villano('Lex Luthor');
lex.plan = function() {
    console.log('Es cortar flores');
}

lex.plan();