
const NumerosPares = () => {

    for ( i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            console.log(list[i]);
        }
    }
}

list = [ 2 , 6 , 7 , 12 , 15 , 26 , 28];
NumerosPares(list);