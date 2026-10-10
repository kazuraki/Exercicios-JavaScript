import { dadosSistema } from "./dados.js";
import erro from "./erro.js";

// Lista local de quartos disponíveis caso não venha de outro arquivo
let quartosDisp = ["Quarto 1", "Quarto 2", "Quarto 3", "Quarto 4", "Quarto 5", "Quarto 6", "Quarto 7", "Quarto 8", "Quarto 9", "Quarto 10", "Quarto 11", "Quarto 12", "Quarto 13", "Quarto 14", "Quarto 15", "Quarto 16", "Quarto 17", "Quarto 18", "Quarto 19", "Quarto 20"];

export default function reservas() {
    let diaria = parseFloat(prompt("Informe o valor da diária: "));
    let qntdDias = parseInt(prompt("Informe a quantidade de dias (máximo 30): "));

    // Validação inicial
    if (isNaN(diaria) || isNaN(qntdDias) || diaria <= 0 || qntdDias <= 0 || qntdDias > 30) {
        erro();
        return; // Apenas sai da função de reserva e volta para o menu
    }

    let nomeHosp = prompt("Digite o nome do hóspede: ");

    while (!nomeHosp || nomeHosp.trim() === "") {
        nomeHosp = prompt("Nome inválido. Digite novamente: ");
    }

    alert("Tipos de quartos:\n(S) Standard - Fator 1.00\n(E) Executivo - Fator 1.35\n(L) Luxo - Fator 1.65");
    let tpQuarto = prompt("Selecione o tipo de quarto (S, E ou L): ").toUpperCase();

    while (tpQuarto !== "S" && tpQuarto !== "E" && tpQuarto !== "L") {
        erro();
        tpQuarto = prompt("Selecione novamente o tipo de quarto (S, E ou L): ").toUpperCase();
    }

    let subtotal = 0;
    let fatorTexto = "";

    if (tpQuarto === "S") {
        fatorTexto = "Standard";
        subtotal = diaria * qntdDias * 1.00;
    } else if (tpQuarto === "E") {
        fatorTexto = "Executivo";
        subtotal = diaria * qntdDias * 1.35;
    } else if (tpQuarto === "L") {
        fatorTexto = "Luxo";
        subtotal = diaria * qntdDias * 1.65;
    }

    alert("Quartos disponíveis:\n" + quartosDisp.join(", "));

    let quartosR = prompt("Digite o número do quarto para reserva (ex: 1, 2...): ");
    let numQuarto = "Quarto " + quartosR;

    while (!quartosDisp.includes(numQuarto)) {
        erro();
        quartosR = prompt("Quarto inválido ou indisponível. Digite novamente: ");
        numQuarto = "Quarto " + quartosR;
    }

    let taxaServico = subtotal * 0.10;
    let totalFinal = subtotal + taxaServico;

    alert(
        "--- RESUMO DA RESERVA ---\n" +
        "Hóspede: " + nomeHosp + "\n" +
        "Tipo: " + fatorTexto + "\n" +
        "Quarto: " + numQuarto + "\n" +
        "Subtotal: R$ " + subtotal.toFixed(2) + "\n" +
        "Taxa de Serviço (10%): R$ " + taxaServico.toFixed(2) + "\n" +
        "Total Final: R$ " + totalFinal.toFixed(2)
    );

    let resposta = prompt("Deseja confirmar a reserva? (S/N)").toUpperCase();

    while (resposta !== "S" && resposta !== "N") {
        resposta = prompt("Resposta inválida, digite S ou N: ").toUpperCase();
    }

    if (resposta === "S") {
        alert("Reserva feita com sucesso!");

        
        let indice = quartosDisp.indexOf(numQuarto);
        if (indice !== -1) {
            quartosDisp.splice(indice, 1);
        }

        dadosSistema.reservasConfirmadas++;
        dadosSistema.quartosOcupados++;
        dadosSistema.receitaHospedagem += totalFinal;

    } else {
        alert("Reserva não confirmada.");
    }
}