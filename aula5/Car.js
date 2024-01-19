import  Veiculo from "./Veiculo.js";

 export default class Car extends Veiculo {

    constructor() {
        super();

        this.speed = 20;
        console.log(this.speed);
    }
}