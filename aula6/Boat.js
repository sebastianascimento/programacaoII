
import  Veiculo from "./Veiculo.js";

 export default class Boat extends Veiculo {

    constructor(data) {
        super(data);

        console.log(this.brand ,this.speed);
    }
}