/*Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda
se for 1, escreva a soma dessas variáveis mais o resto da divisão
se for 2, escreva se o primeiro e o segundo valor são ímpares ou pares
se for 3, multiplique a soma dos valores lidos pelo primeiro
se for 4, divida a soma dos números pelo segundo, sendo este != 0
se o resto for >4, escreva o quadrado dos números lidos*/

import {input} from '../../io_utils.js';

function main(){
    const numero_1 = Number(input('Número: '))
    const numero_2 = Number(input('Número: '))

    //resto = 1
    if (resto_da_divisao(numero_1, numero_2) === 1){
        console.log(resto_1(numero_1, numero_2))
    }
    //resto = 2
    if (resto_da_divisao(numero_1, numero_2) === 2){
        console.log(resto_2(numero_1, numero_2))
    }
    //resto = 3
    if (resto_da_divisao(numero_1, numero_2) === 3){
        console.log(resto_3(numero_1, numero_2))
    }
    //resto = 4
    if (resto_da_divisao(numero_1, numero_2) === 4){
        console.log(resto_4(numero_1,numero_2))
    }
    //resto acima de 4
    if (resto_da_divisao(numero_1, numero_2) > 4){
        console.log(resto_diferente_de_4(numero_1, numero_2))
    }

    function resto_da_divisao(n1, n2){
        const resto = Math.trunc(n1 / n2)
        return resto
    }

    function resto_1(n1, n2) {
        const resultado = n1 + n2 + 1
        return resultado
    }

    function resto_2(n1, n2) {
        if (n1 % 2 === 0 && n2 % 2 === 0) {
            console.log('São pares')
        } else {
            console.log('São ímpares')
        }
    }

    function resto_3(n1, n2) {
        const resultado = (n1 + n2) * n1
        return resultado
    }

    function resto_4(n1, n2) {
        if (n1 && n2 != 0) {
            const resultado = (n1 + n2) / n2
            return resultado
        }
    }

    function resto_diferente_de_4(n1, n2) {
        const quadrado_numero_1 = n1 ** 2
        const quadrado_numero_2 = n2 ** 2
        return [quadrado_numero_1, quadrado_numero_2]
    }

}

main()

// resto = 1. n1 e n2 = 3. Tem que retornar 7
// resto = 2

