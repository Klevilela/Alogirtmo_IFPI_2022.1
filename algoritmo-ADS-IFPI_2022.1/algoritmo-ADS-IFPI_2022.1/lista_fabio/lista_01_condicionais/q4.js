/*Leia um número de dois dígitos,
verifique e escreva se o algarismo da dezena é igual ao da unidade*/

import {input} from '../../io_utils.js';

function main(){
    const numero = Number(input('Número: '))
    const dezena = Math.trunc(numero / 10)
    const unidade = numero % 10
    
    if (dezena === unidade){
        console.log('São iguais')
    }else{
        console.log('Não são iguais')
    }
    
    
    /*if (dezena === numero){
        console.log('São iguais')
    } else{
        console.log('Diferentes')
    }*/
    console.log(dezena)
    
}
main()

// numero == 44
// se unidade == 4 e a dezena tbm, então o algarismo da dezena é igual ao da unidade
// numero / 10. Pega o resultado e ve se é igual ao unidade

//se o resto da divisão por 10 = 0, então são iguais
