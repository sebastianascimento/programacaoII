
export default class ArtPiece {

    #callback;
    #imageElem;
    #data;
    view
    constructor(data, callback) {

        this.#data = data;
        this.#callback = callback;

        this.#buildArtElement();
    }

    #buildArtElement() {

        this.view = document.createElement("div");
        this.view.className = "art-container";

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = this.#data.image;
        this.#imageElem.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
    

        this.view.appendChild(this.#imageElem);
        container.appendChild(this.view);
    }

    introduce() {
        return  this.#data.valueTicket;
    }
    show () {
        this.view.style.display = "initial";
    }

    hide() {
        this.view.style.display = "none";


    }

    get type() {
        return this.#data.type;
    }
    get image() {
        return this.#data.image;
    }

    get title() {
        return this.#data.title;
    }
    set title(value) {
        this.#data.title = value;
    }
    get artist () {
        return this.#data.artist;
    }
    get localization () {
        return this.#data.localization;
    }
    get medium () {
        return this.#data.medium;
    }

    get active() {
        return this.#imageElem.className.length !== 0;
    }
    set active(value) {
        this.#imageElem.className = value ? 'active' : '';
    }
}