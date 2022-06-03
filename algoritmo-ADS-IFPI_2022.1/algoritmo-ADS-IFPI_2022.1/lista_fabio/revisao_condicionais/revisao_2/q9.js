/*leia um número e exiba o dia correspondente da seman(1-domingo, 2-segunda ...) se digitar outro valor deve aparecer inválido*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero_da_semana = Number(input('Informe o número da semana: '))

    function dia_da_semana(n){

        if (n === 1){return 'Domingo'}
        if (n === 2){return 'Segunda'}
        if (n === 3){return 'Terça'}
        if (n === 4){return 'Quarta'}
        if (n === 5){return 'Quinta'}
        if (n === 6){return 'Sexta'}
        if (n === 7){return 'Sábado'}
        else{return 'Valor inválido'}
    }

    console.log(dia_da_semana(numero_da_semana))
}

main()