
import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const data = {

    car: [
        {
        brand: "ferari",
        speed: 100,
        },

        {
        brand: "fiat",
        speed: 50,
        },
    ],
    motorcycle: [
        {
        brand: "yamha",
        speed: 100,
        },
        {
        brand: "harley",
        speed: 300,
        },
    ]

};

const veiculos = [];
window.onload = () => {
    console.log("windo loaded");

    const nav = document.querySelector("nav");
        
    const createUL = (name , data) => {  
        const ul = document.createElement("ul");
        const tittle = document.createElement("li");
        tittle.innerText = name;
        ul.appendChild(tittle); 

        data.forEach((element, index )=> {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.onclick = (event) => {
                switch (name) {
                    case "cars":
                        veiculos.push(new Car (data[index]));
                        break;
                    case "motorcycles" :
                        veiculos.push(new Motorcycle (data[index]));
                        break;              
                    default:
                        break;
                }

                console.log(veiculos);
            } 
            button.innerText = element.brand;
            li.appendChild(button);
            ul.appendChild(li);            
        });
        nav.appendChild(ul);
    };
    for (const key in data) {
        console.log(key);
            createUL(key , data[key]);
    }
}


const car = new Car();
const motorcycle = new Motorcycle();






