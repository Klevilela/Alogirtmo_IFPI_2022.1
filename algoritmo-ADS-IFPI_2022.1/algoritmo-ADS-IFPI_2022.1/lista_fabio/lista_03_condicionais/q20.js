/*leia a medida de um ângulo(de 0º a 360º) e escreva o quadrante(primeiro a quarto quadrante)
1º quadrante = 0º a 90º
2º quadrante = 91º 180º
3º quadrante = 181º a 270º
4º quadrante = 271º a 360º*/

import { input } from "../../io_utils.js";

function main(){
    const medida_angulo = Number(input('Informe a medida do ângulo: '))

    if (medida_angulo >= 0 && medida_angulo <= 90){
        console.log('1º quadrante')
    }
    if (medida_angulo >= 91 && medida_angulo <= 180){
        console.log('2º quadrante')
    }
    if (medida_angulo >= 181 && medida_angulo <= 270){
        console.log('3º quadrante')
    }
    if (medida_angulo >= 271 && medida_angulo <= 360){
        console.log('4º quadrante')
    }
}

main()
