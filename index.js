// Desafio 1: Validando número negativo, positivo ou zero
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

// Desafio 3: Validando string vazia
function analisarString(string) {
    if (string == "") {
        console.log("String vazia.");
    } else {
        console.log("String não vazia.");
    }
}

analisarString("oi");