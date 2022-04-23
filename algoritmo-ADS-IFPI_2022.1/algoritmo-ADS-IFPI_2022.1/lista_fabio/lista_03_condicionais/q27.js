/*Determine a idade de uma pessoa, em anos, meses e dias sendo fornecidas as datas de nascimento e a data atual*/

import { input } from "../../io_utils.js";

function main(){
    const data_nascimento = input('Data de Nascimento: ').split('/')
    const data_atual = input('Data de hoje: ').split('/')

    const idade_anos = Number(data_atual[2] - data_nascimento[2])
    const idade_meses = Number(data_atual[1] - data_nascimento[1])
    const idade_dias = Number(data_atual[0] - data_nascimento[0])

    console.log(`Idade em anos: ${idade_anos}`)
    console.log(`Idade em meses: ${idade_meses}`)
    console.log(`Idade em dias: ${idade_dias}`)

}

main()