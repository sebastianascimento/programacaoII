import Painting from "./Painting.js";
import Sculpture from "./Sculpture.js";
import Architecture from "./Architecture.js";

export default class Gallery {

    #art;
    #callback;
    #currentArt = null;
    #currentIndex = 0 ;
    constructor(callback) {
        this.#art = [];
        this.#callback = callback;
        document.querySelector(".prev").onclick = () => {
            this.#art[this.#currentIndex].hide();
            this.#currentIndex--
            if (this.#currentIndex < 0) {
                this.#currentIndex = this.#art.length - 1;
            }
            this.#art[this.#currentIndex].show();
        }
        document.querySelector(".next").onclick = () => {

            this.#art[this.#currentIndex].hide();
            this.#currentIndex++
            if (this.#currentIndex >= this.#art.length) {
                this.#currentIndex = 0;
            }
            this.#art[this.#currentIndex].show();

        }
        document.querySelector(".info").onclick  = () => {
            this.#callback(this.#art[this.#currentIndex]);
        
        }
    }

    addArt (art) {
        console.log(art.type);
        let nextArt = null;
        switch (art.type) {
            case "painting":
                nextArt = new Painting(art, () => this.#performArt(nextArt));
                break;
            case "sculpture":
                nextArt = new Sculpture(art, () => this.#performArt(nextArt));
                break;
            case "architecture":
                nextArt = new Architecture(art, () => this.#performArt(nextArt));
                break;
            default:
                break;
        }
        this.#art.push(nextArt);
    }

    #performArt(art) {
        if(this.#currentArt) {
            this.#currentArt.active = false;
        }

        this.#currentArt = this.#art.find(obras => obras.title === art.title);
        this.#currentArt.active = true;
        
        this.#callback(art);
    }

    showArt() {
        const artContainer = document.getElementById('art-container');
        this.#art.forEach(art => {
            const artElement = document.createElement('div');
            artElement.textContent = art.introduce(); 
            artContainer.appendChild(artElement);
        });
    }

    inital () {
    this.#art.forEach(element => {
        element.hide()
            
        });
        this.#art[this.#currentIndex].show()

    }
    
    getArt(title) {
        return this.#art.find(art => art.title === title);
    }

    static GalleryInfo() {

        return "A Gallery is a place to display works of art";
    }

    
     showImageInfo (infoContainer, infoString)  {
        infoContainer.innerHTML = infoString;
        infoContainer.style.display = 'block'; 
    
        
        setTimeout(() => {
            infoContainer.innerHTML = '';
            infoContainer.style.display = 'none';
        }, 15000);
    }
    
    
    
    
    
}

