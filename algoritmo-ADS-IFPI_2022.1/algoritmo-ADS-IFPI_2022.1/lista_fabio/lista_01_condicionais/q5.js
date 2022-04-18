/*Leia 3 números e escreva em ordem crescente*/

import {input} from '../../io_utils.js';

function main(){
    const numero_1 = Number(input('Número: '))
    const numero_2 = Number(input('Número: '))
    const numero_3 = Number(input('Número: '))

    let menor_1 = 0 //primeiro número da ordem crescente
    let menor_2 = 0 //segundo número da ordem crescente
    let maior = 0

    if (numero_1 < numero_2 && numero_1 < numero_3){
        menor_1 += numero_1
        menor_2 += numero_2
        maior = numero_3

        console.log(menor_1, menor_2, maior)

    } else if(numero_2 < numero_1 && numero_2 < numero_3 ){
        menor_1 += numero_2
        menor_2 = menor_2 + numero_1
        maior = numero_3

        console.log(menor_1, menor_2, maior)
    } else if(numero_3 < numero_2 && numero_3 < numero_1){
        menor_1 += numero_3
        menor_2 += numero_2
        maior = numero_1

        console.log(menor_1, menor_2, maior)
    }

    //console.log(crescente)

}
main()