let nome = "";
let nivel = "";
let exp = 0;

nome = prompt("Qual o nome do heroi?", "");
exp = prompt("Quantos pontos de experiencia ele tem?", "");

var experiencia = Number(exp);

if (experiencia <= 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 10000) {
    nivel = "Ouro";
} else if (experiencia >= 10001 && experiencia <= 15000) {
    nivel = "Platina";
} else if (experiencia >= 15001 && experiencia <= 25000) {
    nivel = "Ascendente";
} else if (experiencia >= 25001 && experiencia <= 50000) {
    nivel = "Radiante";
} else if (experiencia > 50000) {
    nivel = "Divino";
} else if (experiencia <= 0) {
    experiencia = 0
} else {
    experiencia = "";
}

if (nome !== "" && experiencia !== 0 && experiencia !== "") {
    alert('O herói de nome ' + nome + ' está no nível ' + nivel + '!!');
    document.getElementById("nomeHeroi").textContent = "Nome do Heroi: " + nome;
    document.getElementById("experienciaHeroi").textContent = "Nível do Heroi: " + nivel;
} else if (nome !== "" && experiencia === 0) {
    alert('O herói de nome ' + nome + ' não tem experiência suficiente para ter um nível...');
    document.getElementById("nomeHeroi").textContent = "Nome do Heroi: " + nome;
    document.getElementById("experienciaHeroi").textContent = "Sem experiência suficiente";
} else {
    alert('Valores inválidos');
}

