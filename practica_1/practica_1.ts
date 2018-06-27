// Crear interfaces
interface Auto {
    encender:boolean,
    velocidadMaxima:number;
    acelerar: ()=> void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil(auto:Auto): void {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
}

let batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... run!!!");
    }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

let guason: Guason = {
    reir: true,
    comer: true,
    llorar: false
}
interface Guason {
    reir :boolean,
    comer?:boolean,
    llorar?:boolean
}

function reir(guason:Guason): void {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
    (ciudadanos:string[]):number;
}

let ciudadGotica: CiudadGotica = function(ciudadanos:string[]):number {
    return ciudadanos.length;
}
// function ciudadGotica(ciudadanos: string[]): number {
//     return ciudadanos.length;
// }

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Persona {
    nombre:string;
    edad:number;
    sexo:number;
    estadoCivil:string;
    imprimirBio():number;
}

class PersonaClass implements Persona {
    nombre: string;    
    edad: number;
    sexo: number;
    estadoCivil: string;
    imprimirBio(): number {
        throw new Error("Method not implemented.");
    }
    hola() {
        
    }

}
