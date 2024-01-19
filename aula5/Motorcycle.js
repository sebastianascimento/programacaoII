import Veiculo from "./Veiculo.js";

 export default class Motorcycle extends Veiculo {

    constructor() {
        super();

        this.speed = 30;
        console.log(this.speed);
    }
}
