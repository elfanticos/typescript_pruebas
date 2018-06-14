let heroe:string = "Flash";

function imprime_heroe():string {
    return heroe;
}

function captilizar(palabra:string):string {
    return palabra.charAt(0).toUpperCase()+ palabra.substr(1).toLowerCase();
}
console.log(captilizar('PEDRO'));

function nombreCompleto(nombre:string, ...losDemasParametros:string[]):string {
    return nombre+" "+losDemasParametros.join(' ');
}
console.log(nombreCompleto('jhonatan','meza', 'inca'));