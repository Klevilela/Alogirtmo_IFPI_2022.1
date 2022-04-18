/*Leia dois números, verifique e escreva o menor e o maior entre os números lidos*/

import { input } from '../../io_utils.js';

function main() {
    const numero_1 = Number(input('Número: '))
    const numero_2 = Number(input('Número: '))

    let maior = 0;
    let menor = 0;

    if (numero_1 > numero_2) {
        maior = maior + numero_1
        menor = menor + numero_2

        console.log(`Maior número: ${maior}`)
        console.log(`Menor número: ${menor}`)
    } else if (numero_2 > numero_1){
        maior = maior + numero_2
        menor = menor + numero_1

        console.log(`Maior número: ${maior}`)
        console.log(`Menor número: ${menor}`)

    }else{
        console.log('Número 1 e número 2 são iguais')
    }
}
main()