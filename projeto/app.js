
import Gallery from "./Gallery.js";

window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const info = document.querySelector(".image-info");
    const title = info.querySelector("h1");
    const artist = info.querySelector("h2");
    const localization = info.querySelector("h3");
    const medium = info.querySelector("h4");

    const gallery = new Gallery((art) => {
        title.innerText = art.title;
        artist.innerText = art.artist;
        localization.innerText = art.localization;
        medium.innerText = art.medium;
    });
    
    result.forEach(item => {
        gallery.addArt(item);
    });

    gallery.inital();

}






