import inicio from "./inicio.js"
import menu from "./menu.js";
import { quartosDisp } from "./inicio.js"
import erro from "./erro.js"
import { sair } from "./cadastroHospedes.js";


export default function reservas() {

    let diaria = parseInt(prompt("Valor diaria: "))
    let qntdDias = parseInt(prompt("Quantidade de dias: "))

    if (diaria <= 0 || qntdDias <= 0 || qntdDias > 30) {
        erro();
        menu();
        return;
    }

    let nomeHosp = prompt("Digite seu nome: ")

    while (!nomeHosp || nomeHosp.trim() === "") {
        nomeHosp = prompt("Digite um nome valido: ")
    }

    let resposta = "S";

        alert("Tipos de quartos: (S) Standart | (E) Executivo | (L) Luxo");
        let tpQuarto = prompt("Selecione o tipo de quarto: ").toUpperCase();

        while (tpQuarto.toUpperCase() !== "S" && tpQuarto.toUpperCase() !== "L" && tpQuarto.toUpperCase() !== "E") {

            erro();

            tpQuarto = prompt("Selecione novamente o tipo de quarto: ").toUpperCase();

        }

        let subtotal = 0;

        if (tpQuarto.toUpperCase() === "S") {
            alert("Voce selecionou o tipo standar com fator 1.00")
            subtotal = diaria * qntdDias * 1.00;
        }

        if (tpQuarto.toUpperCase() === "E") {
            alert("Voce selecionou o tipo executivo com fator 1.35")
            subtotal = diaria * qntdDias * 1.35;
        }

        if (tpQuarto.toUpperCase() === "L") {
            alert("Voce selecionou o tipo Luxo com fator 1.65")
            subtotal = diaria * qntdDias * 1.65;
        }


        alert("Quartos disponiveis: " + quartosDisp + " , ")

        let quartosR = prompt("Digite um numero de quarto para reserva: ")
        let numQuarto = "Quarto " + quartosR;

        while (!quartosDisp.includes(numQuarto)) {

            erro();

            quartosR = prompt("Digite o quarto novamente: ");
            numQuarto = "Quarto " + quartosR;

        }

        let taxaServico = subtotal * 0.10

        let totalFinal = subtotal + taxaServico;

        alert(
                "--- RESUMO DA RESERVA ---\n" +
                "Hóspede: " + nomeHosp + "\n" +
                "Quarto: " + numQuarto + "\n" +
                "Subtotal: R$ " + subtotal.toFixed(2) + "\n" +
                "Taxa de Serviço (10%): R$ " + taxaServico.toFixed(2) + "\n" +
                "Total Final: R$ " + totalFinal.toFixed(2)
            );

        resposta = prompt("Deseja confirmar a reserva? (S/N)").toUpperCase()

        while (resposta != "S" && resposta != "N") {

            resposta = prompt("Resposta invalida, digite novamente: ").toUpperCase();

        }

        if (resposta === "S") {

            alert("Reserva feita com sucesso!")

            //localiza o indice cadastrado pela variavel e retira do array
            let indice = quartosDisp.indexOf(numQuarto)
            quartosDisp.splice(indice, 1)

            sair();

        }

        else {
            alert("Reserva não confirmada.")
        }


    }