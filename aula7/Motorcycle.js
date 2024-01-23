import Veiculo from "./Veiculo.js";

 export default class Motorcycle extends Veiculo {

    constructor(data) {
        super(data);

        console.log(this.brand , this.speed);
    }
}
