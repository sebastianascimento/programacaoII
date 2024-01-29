window.onload = () => {

    const test = new Test((data) => {
        h1.innerText = value;
    } );

    test.heigh = 100;
    test.heigh = 100;
    test.background = "red";

    console.log(test.widht);

    const h1 = document.querySelector("h1");
}

class Test2 {
    #view;
    constructor(callback){
        this.#view = document.createElement("div");
        this.#view.onclick = () => {
            document.body.appendChild(this.#view);
        }

    }
}


class Test {
    #name = "test";
    #age = 10;
    #gender = "male"
    
    
    #view;
    #callback;


    constructor(callback){
        this.#callback = callback;

        this.#view = document.createElement("div");
        this.#view.className = "view";
        this.#view.onclick = () => {
            console.log(this.event);
            document.body.appendChild(this.#view);
        }
        
    }
    setSize(widht , heigh){
        this.#view.style.width = widht + "px";
        this.#view.style.height = heigh + "px";
    }
    get widht() {
        return this.#view.style.width.replace("px" , "");
    }
    set widht(value){
        this.#view.style.width = value + "px";
    }
    get heigh() {
        return this.#view.style.height.replace("px" , "");
    }
    set heigh(value){
        this.#view.style.height = value + "px";
    }
    get background() {
        return this.#view.style.background.replace("px" , "");
    }
    set background(value){
        this.#view.style.background = value + "px";
    }

    
    

    getName() {
        return this.getName;
    }
    getAge() {
        return this.getAge;
    }
    getGender() {
        return this.getGender;
    }

    setName(value) {
        this.#name = value;
    }
    setAge(value) {
        this.#age = value;
    }
    setGender(value){
        this.#gender = value;
    }
}

const test = new Test();





