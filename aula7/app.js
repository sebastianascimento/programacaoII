    import Car from "./Car.js";
    import Motorcycle from "./Motorcycle.js";
    import Boat from "./Boat.js";

    let currentVeiculo;


const loadData = async (url) => {
        
    const request = await fetch(url);
    const result = await request.json();


    return result;


}

const createLiContent = (item) => {
    const button = document.createElement("button");
    button.innerText = item.brand;

    button.addEventListener("click" , () => {
        console.log("Window add");

    })
    
    button.onclick = () => {
        if (currentVeiculo) {
            currentVeiculo.destroy();

        }
            switch (item.type) {
                case "car":
                 currentVeiculo =   new Car(item);
                    break;
                case "motorcycle":
                    currentVeiculo =new Motorcycle(item);
                    break;
                case "boat":
                    currentVeiculo = new Boat(item);
                    break;
            }
    }

    return button;


}
const createList = (data) => {

    const ul = document.querySelector("ul");
    
    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLiContent(item));

        ul.appendChild(li);        
    });

} 
    const play = () => {
        isPlaying = setInterval (() => {
            console.log("new frame");
        }, 1000);
        playButton.innerText = "Stop";
        playButton.className = "red";
       
    }

    const stop = () => {
        clearInterval(isPlaying);
        isPlaying = null;
        playButton.innerText = "Play";
        playButton.className = "green";
        console.log("animattion Stop");
    }

    const animate = () =>  {
        currentVeiculo.animate();
        isPlaying = requestAnimationFrame(animate);
    }

    const playAnimation = () => {

        isPlaying = requestAnimationFrame(animate);
        console.log(isPlaying);
        playButton.innerText = "Stop";
        playButton.className = "red";

    }

    const stopAnimation = () => {
        cancelAnimationFrame(isPlaying);
        isPlaying = null;
        playButton.innerText = "Play";
        playButton.className = "green";
        
    }

    let isPlaying = null;
    let playButton;

window.onload = async () => {
    
    const data =  await loadData("data.json");
    data.sort((a , b) => a.type.localeCompare(b.type));

    const ul = createList(data);
    playButton = document.querySelector("#play_pause");
    
    playButton.onclick = () => {
        isPlaying ? stop() : play();
        
    }
}




