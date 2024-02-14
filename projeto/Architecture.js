import ArtPiece from "./ArtPiece.js";

export default class Architecture extends ArtPiece {
    #valueTicket;

    constructor(data, callback) {
        super(data, callback);
        this.#valueTicket = data.valueTicket;
    }

    introduce() {
        let parentIntroduce = super.introduce();
        return parentIntroduce + "o valor é " + this.#valueTicket + "£";
    }
}

