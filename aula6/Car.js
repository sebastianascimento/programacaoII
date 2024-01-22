import  Veiculo from "./Veiculo.js";

 export default class Car extends Veiculo {

    constructor(data) {
        super();

        console.log(this.brand ,this.speed);
    }
}