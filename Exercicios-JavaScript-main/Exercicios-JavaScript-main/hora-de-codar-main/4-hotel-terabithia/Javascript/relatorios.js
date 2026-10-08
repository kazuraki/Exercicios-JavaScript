import { formatarMoeda, formatarPorcentagem } from "./utils.js";

export default function gerarRelatorio(dadosSistema) {
    const totalQuartos = 20;
    const taxaOcupacao = dadosSistema.quartosOcupados / totalQuartos;
    const receitaTotal = dadosSistema.receitaHospedagem + dadosSistema.receitaEventos;

    const cabecalho = "====================================================\n" +
                      "         HOTEL TERABITHIA — RELATÓRIO OPERACIONAL    \n" +
                      "====================================================\n\n";

    const linhaDivisoria = "----------------------------------------------------\n";

    const tabela = 
        `Métrica                                | Valor       \n` +
        linhaDivisoria +
        `Reservas Confirmadas                   | ${String(dadosSistema.reservasConfirmadas).padEnd(12)}\n` +
        `Quartos Ocupados                       | ${String(dadosSistema.quartosOcupados + "/" + totalQuartos).padEnd(12)}\n` +
        `Taxa de Ocupação                       | ${formatarPorcentagem(taxaOcupacao).padEnd(12)}\n` +
        `Hóspedes Cadastrados                   | ${String(dadosSistema.totalHospedes).padEnd(12)}\n` +
        `Eventos Confirmados                    | ${String(dadosSistema.eventosConfirmados).padEnd(12)}\n` +
        linhaDivisoria +
        `Receita - Hospedagem                   | ${formatarMoeda(dadosSistema.receitaHospedagem).padEnd(12)}\n` +
        `Receita - Eventos                      | ${formatarMoeda(dadosSistema.receitaEventos).padEnd(12)}\n` +
        `Receita Total                          | ${formatarMoeda(receitaTotal).padEnd(12)}\n` +
        "====================================================";

    alert(cabecalho + tabela);
}