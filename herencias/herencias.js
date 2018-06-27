// import { Padre } from "./padre";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre() {
    }
    Object.defineProperty(Padre.prototype, "_n1", {
        get: function () {
            return this.n1;
        },
        set: function (n1) {
            this.n1 = n1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Padre.prototype, "_n2", {
        get: function () {
            return this.n2;
        },
        set: function (n2) {
            this.n2 = n2;
        },
        enumerable: true,
        configurable: true
    });
    Padre.prototype.suma = function () {
        return (this.n1 + this.n2);
    };
    return Padre;
}());
var Herencia = /** @class */ (function (_super) {
    __extends(Herencia, _super);
    function Herencia() {
        return _super.call(this) || this;
    }
    return Herencia;
}(Padre));
var herencia = new Herencia();
console.log(herencia._n1);
herencia._n1 = 10;
console.log(herencia._n1);
