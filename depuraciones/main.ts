let heroe2:string = 'Ricardo Tapia (Robin)';
let edad:number = 30;

let mensaje:string = imprimir(heroe2, edad);

console.log(mensaje);

function imprimir(heroe:string , edad:number):string {
    heroe2 = heroe2.toLowerCase();
    edad   = edad + 10;
    return heroe2+' '+edad;
}