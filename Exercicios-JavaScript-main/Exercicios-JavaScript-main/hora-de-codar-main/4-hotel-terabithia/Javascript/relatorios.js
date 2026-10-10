import { dadosSistema } from "./dados.js";

export default function gerarRelatorio() {
    let totalQuartos = 20;
    let taxaOcupacao = (dadosSistema.quartosOcupados / totalQuartos) * 100;
    let receitaTotal = dadosSistema.receitaHospedagem + dadosSistema.receitaEventos;

    alert(
        "====================================\n" +
        "     HOTEL TERABITHIA — RELATÓRIO   \n" +
        "====================================\n\n" +
        "• Reservas confirmadas: " + dadosSistema.reservasConfirmadas + "\n" +
        "• Quartos ocupados: " + dadosSistema.quartosOcupados + "/" + totalQuartos + " (" + taxaOcupacao.toFixed(1) + "%)\n" +
        "• Hóspedes cadastrados: " + dadosSistema.totalHospedes + "\n" +
        "• Eventos confirmados: " + dadosSistema.eventosConfirmados + "\n\n" +
        "------------------------------------\n" +
        "• Receita de Hospedagem: R$ " + dadosSistema.receitaHospedagem.toFixed(2) + "\n" +
        "• Receita de Eventos: R$ " + dadosSistema.receitaEventos.toFixed(2) + "\n" +
        "------------------------------------\n" +
        "• MELHOR ORÇAMENTO AR-CONDICIONADO:\n" +
        "  Empresa: " + (dadosSistema.empresaAr || "Nenhum cadastrado") + "\n" +
        "  Valor: R$ " + (dadosSistema.melhorOrcamentoAr === Infinity ? "0.00" : dadosSistema.melhorOrcamentoAr.toFixed(2)) + "\n\n" +
        "====================================\n" +
        "RECEITA TOTAL DO HOTEL: R$ " + receitaTotal.toFixed(2) + "\n" +
        "===================================="
    );
}