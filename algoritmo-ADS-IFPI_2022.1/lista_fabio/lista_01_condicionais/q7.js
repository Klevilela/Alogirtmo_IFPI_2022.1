/*leia 3 números que corresponde ao lado do triângulo
3 lados iguais = equilátero
2 lados iguais = isósceles
3 lados diferentes = escaleno*/

import {input} from '../../io_utils.js';

function main(){
    const lado_1 = Number(input('Informe a medida do lado: '))
    const lado_2 = Number(input('Informe a medida do lado: '))
    const lado_3 = Number(input('Informe a medida do lado: '))

    if (lado_1 === lado_2 && lado_2 === lado_3 && lado_1 === lado_3 && lado_1 + lado_2 > lado_3){
        console.log('Triângulo equilátero')
    }else if(lado_1 === lado_2 || lado_1 === lado_3 || lado_2 == lado_3){
        console.log('Triângulo isósceles')
    } else if (
        lado_1 != lado_2 && lado_1 != lado_3 || lado_2 != lado_1 && lado_2 != lado_3 || lado_3 != lado_1 && lado_3 != lado_2
    ) {
            console.log('Triângulo escaleno')
        }
    else{
        console.log('Não existe')
    }
}
main()