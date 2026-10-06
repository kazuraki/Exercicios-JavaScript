import erro from "./erro.js";

export default function ar_condicionado() {

    let menorValor = Infinity;
    let empresaMaisBarata = "";
    let continuar = "S";

    while (continuar === "S") {

        let total = 0;

        let nomeEmpresa = prompt("Digite o nome da empresa: ");
        let valorAparelho = parseFloat(prompt("Digite o valor dos aparelhos: "));
        let qntdAparelho = parseInt(prompt("Digite a quantidade de aparelhos: "));
        let desconto = parseFloat(prompt("Digite o percentual de desconto: "));
        let qntdMDesconto = parseInt(prompt("Digite a quantidade minima para desconto: "));
        let deslocamento = parseFloat(prompt("Digite o deslocamento: "));

        if (valorAparelho < 0 || qntdAparelho <= 0 || desconto < 0 || qntdMDesconto < 0 || deslocamento < 0) {
            erro();
            return;
        }

        let vlrBruto = valorAparelho * qntdAparelho;

        if (qntdAparelho >= qntdMDesconto) {

            let vlrDesconto = vlrBruto * (desconto / 100);

            total = vlrBruto + deslocamento - vlrDesconto;

        } else {
            total = vlrBruto + deslocamento;
        }

        alert(
            "[Ar-Condicionado]\n" +
            "Empresa: " + nomeEmpresa + "\n" +
            "Valor por aparelho: R$ " + valorAparelho.toFixed(2) + "\n" +
            "Quantidade: " + qntdAparelho + "\n" +
            "Desconto (%): " + desconto + "%\n" +
            "Mínimo para desconto: " + qntdMDesconto + "\n" +
            "Deslocamento: R$ " + deslocamento.toFixed(2) + "\n" +
            "Total: R$ " + total.toFixed(2)
        );

        if (total < menorValor) {
            menorValor = total;
            empresaMaisBarata = nomeEmpresa;
        }

        continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
    }

    alert("O orçamento mais barato é o de " + empresaMaisBarata + " por R$ " + menorValor.toFixed(2));

}