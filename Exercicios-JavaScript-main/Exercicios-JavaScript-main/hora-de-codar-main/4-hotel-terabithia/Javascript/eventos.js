import erro from "./erro.js"


export default function eventos() {

    let tempo = 0;
    let tempofinal = 0;
    let qntCadeiras = 0;
    let tempolimite = 0; 

    let diaSemana = ["segunda", "terca", "quarta", "quinta", "sexta", "sabado", "domingo"];

    let auditorio = "Auditorio"

    let resposta = prompt("Escolha um dia da semana: ").toLowerCase();

    if (diaSemana.includes(resposta.toLowerCase())) {

        if (resposta === "segunda" || resposta === "terca" || resposta === "quarta" || resposta === "quinta" || resposta === "sexta") {
            tempo = parseInt(prompt("Escolha o horario de inicio: "))
            tempolimite = 23;

            while (tempo < 7 || tempo > 22) {
                alert("Horario indisponivel")
                tempo = parseInt(prompt("Digite o valor novamente: "))
            }
        }
        if (resposta === "sabado" || resposta === "domingo") {
            tempo = parseInt(prompt("Escolha o horario de inicio: "));
            tempolimite = 15

            while (tempo < 7 || tempo > 15) {
                alert("Horario indisponivel")
                tempo = parseInt(prompt("Digite o valor novamente: "))
            }
        }

        let qntdPessoas = parseInt(prompt("Digite a quantidade de convidados: "))

        if(qntdPessoas <= 0 || qntdPessoas > 350){
            erro();
            return;
        }
        if(qntdPessoas <= 220){
            alert("Voce foi alocado ao auditorio laranja")
            auditorio = "Auditorio Laranja"
            if(qntdPessoas > 150){
                qntCadeiras = qntdPessoas - 150;
                alert("Foram adicionadas " + qntCadeiras + " cadeiras")
            }
        }

        else if(qntdPessoas <= 350){

            alert("Voce foi alocado ao auditorio Colorado ")
            auditorio = "Auditorio Colorado"
        }

        let duracao = parseInt(prompt("Digite a duracao do evento: "))
        if (duracao < 1 || duracao > 12) {
            erro()
            return;
        } else {
            tempofinal = tempo + duracao;

            if (tempofinal > tempolimite) {
                erro();
                return;
            }
        }

        let empresa = prompt("Digite o nome da empresa: ");

        let garconsP = Math.ceil(qntdPessoas / 12);
        let garconsR = Math.floor(duracao / 2);
        let totalGarcons = garconsR + garconsP;

        let custoGarcons = totalGarcons * duracao * 10.50;

        let qntCafe = 0.2 * qntdPessoas;
        let qntAgua = 0.5 * qntdPessoas;
        let qntSalgados = 7 * qntdPessoas; 

        let precoCafe = qntCafe * 0.8;
        let precoAgua = qntAgua * 0.4;
        let precoSalgado = qntSalgados * 0.34;

        let custoBuffet = precoCafe + precoAgua + precoSalgado;

        let totalEvento = custoBuffet + custoGarcons;

        alert(
            "--- RESUMO DO EVENTO ---\n\n" +
            "Empresa: " + empresa + "\n" +
            "Auditório: " + auditorio + "\n" +
            "Cadeiras adicionadas: " + qntCadeiras + "\n\n" +
            "Dia da semana: " + resposta + "\n" +
            "Horário: " + tempo + "h às " + tempofinal + "h (" + duracao + "h de duração)\n\n" +
            "--- SERVIÇOS ---\n" +
            "Garçons necessários: " + totalGarcons + "\n" +
            "Custo com garçons: R$ " + custoGarcons.toFixed(2) + "\n\n" +
            "--- BUFFET ---\n" +
            "Café: " + qntCafe + " L\n" +
            "Água: " + qntAgua + " L\n" +
            "Salgados: " + qntSalgados + " un\n" +
            "Custo buffet: R$ " + custoBuffet.toFixed(2) + "\n\n" +
            "--- TOTAL ---\n" +
            "Total do evento: R$ " + totalEvento.toFixed(2)
        );

        let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();

         while(resposta != "S" && resposta != "N" ){
                resposta= prompt("Resposta invalida, digite novamente").toUpperCase();
            }

        if (confirmacao === "S") {
            alert("Reserva efetuada com sucesso.");
        } else {
            alert("Reserva não efetuada.");
        }

    } else {
        erro();
        return;
    }

}