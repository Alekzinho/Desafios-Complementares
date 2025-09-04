// Desafio 1: validando número negativo, positivo ou zero
function analisarNumero(numero) {
    if (numero < 0) {
        console.log(`O número ${numero} é negativo.`);
    }

    if (numero > 0) {
        console.log(`O número ${numero} é positivo.`);
    }

    if (numero == 0) {
        console.log(`O número ${numero} é zero.`);
    }
}

analisarNumero(0);