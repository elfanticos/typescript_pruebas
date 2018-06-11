type Heroe = {
    nombre: string, 
    edad: number, 
    poderes: any[], 
    getNombre: () => string
};

let flash: Heroe = {
    nombre : 'Barry Allen',
    edad : 24,
    poderes : ['Puede correr muy rapido', 'viaja por el tiempo', 230],
    getNombre() {
        return this.nombre;
    }
};


let superman: Heroe = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Puede volar', 'Super velocidad', 223],
    getNombre() {
        return this.nombre;
    }
};

function prueba(data:Heroe) {
    console.log(data.getNombre());
}

prueba({
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Puede volar', 'Super velocidad', 223],
    getNombre() {
        return this.nombre;
    }
});