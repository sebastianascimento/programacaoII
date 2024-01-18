
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

let a = 1;
let b = 0;


const fibonnaci = () => {
    for (let i = 0; i < 10; i++) {
        const temp = a;
            console.log(a)
        a = a + b;
            console.log(a)
        b = temp;
            console.log(a);
    }
}        

fibonnaci()

let user = {
    id: 0,
    name: 'Sebastião',
    age: 21,
    gender: 'male',
    dob: '18-10-2002',
    hobbies: ['Gym' , 'Padel' , 'Surf' , 'programing']
}

class User {

    name;
    age;
    constructor (name , age) {
        this.name;
        this.age;
        console.log("class user initiated");
    }
    getname() {
        console.log("return the user name");

        return this.name;
    }
    getage() {
        console.log("return the user age");
        return this.age;
    }

    set #name(value) {
        this.#name = value;
    }
    get name() {
        return this.#name;
    }
    
}

const user2 = new User();
user2.name = user.name;
user2.age = user.age;
console.log(user2.getname());
console.log(user2.getage());


for(const key in user) {
    console.log(key);
}



const car = new Car();
const motorcycle = new Motorcycle();






