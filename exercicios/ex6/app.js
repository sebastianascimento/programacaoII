
let fibonacci = [0 ,1];


const NumeroFibonacci = () => {

    for(i = 2 ; i < finish ; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];  
    }

    console.log("O fibonacci ate o " , finish , "º item");

    for(i = 0 ; i < finish ; i++) {
        console.log(fibonacci[i]);
    }
}


let finish = prompt("Escolha quantos numeros quer ver da sequencia de fibonacci: ");
finish = parseFloat(finish);
console.log(NumeroFibonacci(finish));

