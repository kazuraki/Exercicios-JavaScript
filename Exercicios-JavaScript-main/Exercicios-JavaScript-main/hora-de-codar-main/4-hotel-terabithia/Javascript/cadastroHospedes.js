import { dadosSistema } from "./dados.js";
import erro from "./erro.js";

export default function hospedes() {
    let continuar = true;

    while (continuar) {
        let escolha_hospedes = parseInt(
            prompt(
                "Cadastro de Hóspedes\nSelecione uma opção:\n" +
                "1 - Cadastrar\n" +
                "2 - Pesquisar exato\n" +
                "3 - Listar\n" +
                "4 - Voltar"
            )
        );

        switch (escolha_hospedes) {
            case 1:
                cadastrar_hospedes();
                break;
            case 2:
                pesquisar_hospedes();
                break;
            case 3:
                listar_hospedes();
                break;
            case 4:
                continuar = false;
                break;
            default:
                erro_pesquisar_hospedes();
        }
    }
}

function cadastrar_hospedes() {
    
    if (dadosSistema.listaHospedes.length >= 15) {
        alert("Número máximo de hóspedes cadastrados (15).");
    } else {
        let nome_hospede = prompt("Por favor, informe o nome da(o) hóspede:");

        if (nome_hospede && nome_hospede.trim() !== "") {
            
            dadosSistema.listaHospedes.push(nome_hospede.trim());
            
            dadosSistema.totalHospedes = dadosSistema.listaHospedes.length;
            dadosSistema.quartosOcupados++; 

            alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!");
        } else {
            alert("Nome inválido!");
        }
    }
}

function listar_hospedes() {
    if (dadosSistema.listaHospedes.length === 0) {
        alert("Nenhum hóspede cadastrado até o momento.");
    } else {
        let textoLista = "Hóspedes cadastrados:\n";
        for (let i = 0; i < dadosSistema.listaHospedes.length; i++) {
            textoLista += (i + 1) + ". " + dadosSistema.listaHospedes[i] + "\n";
        }
        alert(textoLista);
    }
}

function pesquisar_hospedes() {
    let nome_hospede = prompt("Por favor, informe o nome da(o) hóspede para pesquisa:");

    if (nome_hospede) {
        let nomeBuscado = nome_hospede.trim();
        if (dadosSistema.listaHospedes.includes(nomeBuscado)) {
            alert(nomeBuscado + " encontrada(o).");
        } else {
            alert(nomeBuscado + " não foi encontrada(o).");
        }
    }
}

function erro_pesquisar_hospedes() {
    alert("Por favor, informe um número válido entre 1 e 4.");
}

export function sair() {
    return;
}