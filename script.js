// Solicita ao usuário o nome, altura em centímetros e peso
let nome = prompt("Digite seu nome:");
let alturaCentimetros = parseFloat(prompt("Digite sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

// Converte a altura de centímetros para metros
let alturaMetros = alturaCentimetros / 100;

// Calcula o IMC (Índice de Massa Corporal)
let imc = peso / (alturaMetros * alturaMetros);

// Classifica o peso com base no IMC calculado
let classificacao;
if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
} else if (imc >= 18.50 && imc <= 24.99) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

// Exibe os resultados
console.log("Nome:", nome);
console.log("IMC:", imc.toFixed(2));
console.log("Classificação de peso:", classificacao);