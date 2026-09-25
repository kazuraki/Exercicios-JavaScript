import inicio from "./inicio.js"
import menu from "./menu.js";
import {quartosDisp} from "./inicio.js"

export default function reservas(){

    let diaria = parseInt(prompt("Valor diaria: "))
    let qntdDias = parseInt(prompt("Quantidade de dias: "))

    if (diaria <= 0  || qntdDias <= 0 || qntdDias > 30){
        alert("Erro")
        menu();
        return;
    }

    let nomeHosp = prompt("Digite seu nome: ")

    while(!nomeHosp || nomeHosp.trim() === ""){
        nomeHosp = prompt("Digite um nome valido: ")
        return;  
    }

    alert("Quartos disponiveis: " + quartosDisp + " , ")
    
    let quartosR = prompt("Digite um numero de quarto para reserva: ")
    let numQuarto = "Quarto " + quartosR;
    
    while(!quartosDisp.includes(quartosR)){
        
        alert("Erro");
        quartosR = prompt("Digite o quarto novamente: ");
        return;
    }

    quartosR.indexOf(numQuarto);
    quartosDisp.splice(numQuarto, 1)

    alert("Quarto reservado com sucesso!")
    alert("Quartos restantes: " + quartosDisp);

}