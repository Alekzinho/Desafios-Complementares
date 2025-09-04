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

// Desafio 2: Verificando idade
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
}

verificarIdade(19);