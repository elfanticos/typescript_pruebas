// import { Padre } from "./padre";

class Padre {
    private n1: number;
    private n2:number;
    constructor() {}
    get _n1() {
        return this.n1;
    }

    get _n2() {
        return this.n2;
    }

    set _n1(n1:number) {
        this.n1 = n1;
    }

    set _n2(n2: number) {
        this.n2 = n2;
    }

     suma():number {
        return (this.n1+ this.n2);
    }
}
class Herencia extends Padre{
    constructor() {
        super();
    }
}

let herencia:Herencia = new Herencia();
console.log(herencia._n1);
herencia._n1 = 10;
console.log(herencia._n1);