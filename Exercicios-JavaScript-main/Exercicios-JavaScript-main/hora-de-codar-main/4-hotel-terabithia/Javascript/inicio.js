import menu from "./menu.js"
import reservas from "./reservas.js";
import erro from "./erro.js"


export let quartosDisp = [];

    for(let i = 1; i <=20; i++){

        quartosDisp.push("Quarto " + i)
    }


export default function inicio(nomeHotel) {

			let nomeUsu = prompt("Insira seu nome de usuario: ")
			let senha = prompt("Digite a senha: ")

			if (senha != "2678") {
				for (let i = 0; i < 2; i++) {
					//faz essa primeira validacao para que o codigo nao entre em loop
					senha = prompt("Senha invalida, tente novamente: ");

					if (senha === "2678") {
						break;
					}
				}
			}

			//faz essa segunda validacao para que o codigo nao entre em loop
			if (senha != "2678") {
				alert("Senha invalida, muitas tentativas validas");
				inicio();
				return;
			}

			alert("Bem vindo ao " + nomeHotel + " , " + nomeUsu + ". É um imenso prazer ter você por aqui!");

		do{
			var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Sair'));
			menu(escolha);
		}while(escolha !== 7);

		}