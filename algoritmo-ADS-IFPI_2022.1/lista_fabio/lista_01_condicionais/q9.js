/*leia 1 número entre 0 e 100, verifique e escreva se o número é ou não primo*/

import {input} from '../../io_utils.js';

function main(){
    const numero = Number(input('Número: '))

    if (numero % 2 != 0 && numero % numero === 0 && numero / numero == 1){
        console.log('É primo')
    } else{
        console.log('Não é primo')
    }
}

main()