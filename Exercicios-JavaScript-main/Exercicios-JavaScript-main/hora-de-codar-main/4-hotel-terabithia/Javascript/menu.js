import reservas from "./reservas.js";
import erro from "./erro.js";
import hospedes from "./cadastroHospedes.js";
import eventos from "./eventos.js";
import ar_condicionado from "./arCondicionado.js";
import abastecer_carros from "./abastecimento.js";
import gerarRelatorio from "./relatorios.js";

export default function menu() {
    let escolha = "";

    while (escolha !== "0") {
        escolha = prompt(
            "====================================\n" +
            "      HOTEL TERABITHIA — MENU       \n" +
            "====================================\n" +
            "1. Reservas de Quartos\n" +
            "2. Cadastro de Hóspedes\n" +
            "3. Gestão de Eventos\n" +
            "4. Manutenção (Ar-Condicionado)\n" +
            "5. Abastecimento de Veículos\n" +
            "6. Relatórios Operacionais\n" +
            "0. Sair\n\n" +
            "Escolha uma opção:"
        );

        if (escolha === null) {
            break;
        }

        switch (escolha.trim()) {
            case "1":
                reservas();
                break;
            case "2":
                hospedes();
                break;
            case "3":
                eventos();
                break;
            case "4":
                ar_condicionado();
                break;
            case "5":
                abastecer_carros();
                break;
            case "6":
                gerarRelatorio();
                break;
            case "0":
                alert("Muito obrigado e até logo!");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}