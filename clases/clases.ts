class Avenger {
    nombre: string = "Antman";
    equipo1:string;
    nombreReak:string;
    puedePelear:boolean;
    peleasGanadas:number;
    constructor(nombre:string) {
        this.nombre = nombre;
        console.log('Se ejecuto el constructor');
    }
}


let antman:Avenger = new Avenger('pepa');
console.log(antman);