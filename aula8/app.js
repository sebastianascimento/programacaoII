
    window.onload = () => {

        const large = document.querySelector(".large");
        const small = document.querySelector(".small");

        large.onclick = () => {
            
            small.dispatchEvent(new CustomEvent ('small-event'));

        }
        
        small.addEventListener ("small-event" , () => {
            console.log("large clicked");
        })
    }


    class Test {
        constructor () {

        }

         async onDataLoad() {
            cosnt req = await 
            this.dispatchEvent()
        }
    }