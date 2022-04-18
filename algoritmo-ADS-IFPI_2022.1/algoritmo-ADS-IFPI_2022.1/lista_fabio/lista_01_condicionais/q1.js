/*Leia 3(três) números, verifique e escreva quantos numeros iguais existem entre os números*/

import {input} from '../../io_utils.js';

function main(){
    const numero_1 = Number(input('Número: '))
    const numero_2 = Number(input('Número: '))
    const numero_3 = Number(input('Número: '))

    let quan_num_iguais = 0

    if (numero_1 === numero_2 && numero_1 === numero_3){
        quan_num_iguais = quan_num_iguais + 1
        console.log(`Quantidade de numeros iguais: ${quan_num_iguais}`)
    } else{
        console.log('Não existe nenhum numero igual')
    }
    
}
main()