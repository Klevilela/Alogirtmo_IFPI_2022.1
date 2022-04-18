/*Leia data atual(dia, mês, ano) e data de nascimento(dia, mês, ano) de uma pessoa,
calcule e escreva sua idade exata(em anos)*/

import {input} from '../../io_utils.js';

function main(){
    const data_atual = input('Data atual: ').split('/')
    const data_nascimento = input('Data de nascimento: ').split('/')

    const nova_data = data_atual[2] - data_nascimento[2]

    console.log(`Idade em anos: ${nova_data}`)


}main()