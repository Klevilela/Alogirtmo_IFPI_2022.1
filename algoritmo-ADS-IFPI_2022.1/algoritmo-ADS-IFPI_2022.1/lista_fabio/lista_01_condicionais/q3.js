/*Leia três números, verifique e escreva o maior entre os números lidos*/

import {input} from '../../io_utils.js';

function main(){
    const numero_1 = Number(input('Número: '))
    const numero_2 = Number(input('Número: '))
    const numero_3 = Number(input('Número: '))

    let maior = 0

    if (numero_1 > numero_2 && numero_1 > 3){
        maior = numero_1
        console.log(`Maior número: ${maior}`)
    } else if (numero_2 > numero_1 && numero_2 > numero_3){
        maior = numero_2
        console.log(`Maior número: ${maior}`)
    } else if (numero_3 > numero_1 && numero_3 > numero_2){
        maior = numero_3
        console.log(`Maior número: ${maior}`)
    } else {
        console.log('Os números são iguais')
    }
}
main()