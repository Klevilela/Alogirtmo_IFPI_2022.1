/*Leia três números (cada um corresponde a um ângulo interno do triângulo), verifique e escreva
se os 3 formam um triângulo(soma dos ângulos internos = 180º).
Se formam um triângulo
acutângulo: (3 angulos < 90º)
retangulo: (1 ângulo === 90º)
obstusâmngulo: (1 ângulo > 90º*/

import {input} from '../../io_utils.js';

function main(){
    const angulo_1 = Number(input('Ângulo: '))
    const angulo_2 = Number(input('Ângulo: '))
    const angulo_3 = Number(input('Ângulo: '))

    const soma_angulos_internos_triângulo = angulo_1 + angulo_2 + angulo_3

    if (angulo_1 <90 && angulo_2 < 90 && angulo_3 < 90 && soma_angulos_internos_triângulo === 180){
        console.log('É acutângulo')
    } else if (angulo_1 === 90 || angulo_2 === 90 || angulo_3 === 90 && soma_angulos_internos_triângulo === 180){
        console.log('É retângulo')
    } else if (angulo_1 > 90 || angulo_2 > 90 || angulo_3 > 90 && soma_angulos_internos_triângulo === 180){
        console.log('É obtusângulo')
    }else{
        console.log('Não é triângulo')
    }
     
}
main()