import erro from "./erro.js";

export default function abastecer_carros(){ 

    let tanque = 42;
    let opcaoWayne;
    let opcaoStark;
    let totalWayne = 0;
    let totalStark = 0;
    let me

    let postoWayneA = parseFloat(prompt("Digite o preco do alcool: "));
    let postoWayneG = parseFloat(prompt("Digite o preco da gasolina: "));

    let postoStarkA = parseFloat(prompt("Digite o preco do alcool: "));
    let postoStarkG = parseFloat(prompt("Digite o preco da gasolina: "));

    if (postoWayneA <= 0 || postoWayneG <= 0 || postoStarkA <= 0 || postoStarkG <= 0) {
        erro();
        return;
    }

    let resultadoPWA = postoWayneA * tanque;
    let resultadoPWG = postoWayneG * tanque;

    let resultadoPSA = postoStarkA * tanque;
    let resultadoPSG = postoStarkG * tanque;

    if (resultadoPWA <= (resultadoPWG * 0.70)) {
        opcaoWayne = "Alcool";
        totalWayne = resultadoPWA;
    } else {
        opcaoWayne = "gasolina";
        totalWayne = resultadoPWG;
    }

    if (resultadoPSA <= (resultadoPSG * 0.70)) {
        opcaoStark = "Alcool";
        totalStark = resultadoPSA;
    } else {
        opcaoStark = "gasolina";
        totalStark = resultadoPSG;
    }

    alert(
        "[Abastecimento — Wayne Oil]\n" +
        "Álcool: R$ " + postoWayneA.toFixed(2) + " | Gasolina: R$ " + postoWayneG.toFixed(2) + "\n" +
        "Melhor opção: " + opcaoWayne + " | Total (42L): R$ " + totalWayne.toFixed(2) + "\n\n" +
        "[Abastecimento — Stark Petrol]\n" +
        "Álcool: R$ " + postoStarkA.toFixed(2) + " | Gasolina: R$ " + postoStarkG.toFixed(2) + "\n" +
        "Melhor opção: " + opcaoStark + " | Total (42L): R$ " + totalStark.toFixed(2)
    );

    if (totalWayne < totalStark) {
        alert("O posto mais em conta é o Wayne Oil.");
        
    } else if (totalStark < totalWayne) {
        alert("O posto mais em conta é o Stark Petrol.");
    } else {
        alert("Ambos os postos possuem o mesmo valor total.");
    }

}