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

// Desafio 4: Verificar ano bissexto
function verificarAnoBissexto(ano) {
    const data = new Date (ano, 1, 29)

    if (data.getMonth() == 1) {
        console.log(`${ano} é ano bissexto.`);
    } else {
        console.log(`${ano} não é ano bissexto.`);
    }
}

verificarAnoBissexto(2025);

// Desafio 5: Calculando média
function calcularMedia(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2)) {
        console.log("Digite um número válido");
    } else {
        let media = (valor1 + valor2) /2;
        console.log (`A média dos valores é ${media}.`);
    }
}

calcularMedia(5,5);