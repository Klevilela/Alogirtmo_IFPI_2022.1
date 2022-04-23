/*leia a altura, que corresponde ao eixo Y e a largura, que corresponde ao eixo X. Medidas estas compõem o retângulo
Calcule e escreva a área desse retângulo. E se desconsidera valor de área negativa */

import { input } from "../../io_utils.js";

function main(){
    const x1 = Number(input('Informe o valor do eixo X da cordenada 1: '))
    const y1 = Number(input('Informe o valor do eixo y da cordenada 1: '))

    const x2 = Number(input('Informe o valor do eixo X da cordenada 2: '))
    const y2 = Number(input('Informe o valor do eixo Y da cordenada 2: '))

    //somando no ponto p1, a largura do ponto 1 com a do ponto 2
    const p1 = x1 + x2 // nova base

    //somando no ponto p1, a altura do ponto 1 com a do ponto 2
    const p2 = y1 + y2 //nova altura

    const area = p1 * p2

    if (p1 >= 0 && p2 >= 0 && area >= 0 && x1 >= 0 && x2 >= 0 && y1 >= 0 && y2 >= 0){
        console.log(`\nÁrea: ${area}`)
    }
    else{console.log('Não existe valor de área negativo')}
}

main()

/*
x1 = 4
x2 = 3
y1 = 2
y2 = 2

p1 = 4 + 3 = 7
p2 = 2 + 2 = 4

area = 7 * 4
*/