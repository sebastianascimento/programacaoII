
    window.onload = () => {

        const large = document.querySelector(".large");
        const small = document.querySelector(".small");

        large.onclick = () => {
            
            small.dispatchEvent(new CustomEvent ('div-click'));

        }
        
        small.addEventListener ("div-click" , () => {
            console.log("div clicked");
        })

        
    
    }


