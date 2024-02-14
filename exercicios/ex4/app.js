
const SomarNumeros = (num1 , num2) => {
    return num1 + num2 ;

}

let num1 = prompt("Escolha um nuemro: ");
let num2 = prompt("Escolha outro numero: ");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
console.log(SomarNumeros(num1, num2));