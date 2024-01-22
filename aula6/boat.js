
import  Veiculo from "./Veiculo.js";

 export default class Boat extends Veiculo {

    constructor(data) {
        super(data);

        this.speed = 20;
        console.log(this.brand ,this.speed);
    }
}