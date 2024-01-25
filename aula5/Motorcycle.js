import Veiculo from "./Veiculo.js";

 export default class Motorcycle extends Veiculo {

    constructor(data) {
        super(data);

        this.speed = 30;
        console.log("motorcycle speed" , this.speed);
    }
}
