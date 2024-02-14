
window.onload = () => {
    let resposta = prompt("Escolha um numero: ");
    let verificar = resposta % 2;
        if (verificar === 0 ) {
            console.log("O numero que esolheu é par");
        } else {
            console.log("O numero que escolheu é impar");
        }
}

