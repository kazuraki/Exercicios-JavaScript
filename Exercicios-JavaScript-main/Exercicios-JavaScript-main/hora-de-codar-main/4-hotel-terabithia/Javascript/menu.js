import reservas from "./reservas.js";
import erro from "./erro.js";
//Esse jeito permite varios imports de funcoes do mesmo arquivo
import { sistema_cadastrar_hospedes, cadastro_hospedes, pesquisar_hospedes, erro_pesquisar_hospedes } from "./cadastroHospedes.js"

export default function menu(escolha){
    

		switch (escolha) {
			case 1:
				reservas();
				break;

			case 2:
				cadastro_hospedes();
				break;
				
			case 3:
				eventos();
				break;

			case 4:
				Ar_Condicionado();
				break;

			case 5:

				abastecer_carros();
				break;

			case 6:
				relatos_Operacionais();
				break;

			case 7:
				sair();
				break;

			default:
				erro();
		}

	}
