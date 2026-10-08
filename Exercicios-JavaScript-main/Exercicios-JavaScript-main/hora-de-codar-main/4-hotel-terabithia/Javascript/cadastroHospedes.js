export default function hospedes() {

    var lista_hospedes = [];

    var escolha_hospedes = parseInt(prompt("Cadastro de Hóspedes\n Selecione uma opção: \n1-Cadastrar \n2-Pesquisar exato \n3-Pesquisar \nprefixo \n4-Listar \n5-Atualizar \n6-Remover \n7-Voltar"));

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
            sair();
            break;
        default:
            erro_pesquisar_hospedes();

    }

}

 function cadastrar_hospedes() {

    if (lista_hospedes.length >= 15) {
        alert("Numero máximo de hóspedes cadastrados.");
    } else {
        var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');

        lista_hospedes.push(nome_hospede);
        console.log(lista_hospedes);
        alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
    }

    sistema_cadastrar_hospedes();
}

function listar_hospedes(){

    
    alert("Hospedes cadastrados: "+ i + " " + lista_hospedes.join(" , "))
    sistema_cadastrar_hospedes();
    
}

 function pesquisar_hospedes() {
    var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');

    if (lista_hospedes.includes(nome_hospede)) {
        alert(nome_hospede + ' encontrada(o).')

    } else {
        alert(nome_hospede + ' não foi encontrada(o).')
    }

    sistema_cadastrar_hospedes()
}

 function erro_pesquisar_hospedes() {
    alert('Por favor, informe um número entre 1 e 3');
    sistema_cadastrar_hospedes();
}

    export function sair(){
        return;
    }

