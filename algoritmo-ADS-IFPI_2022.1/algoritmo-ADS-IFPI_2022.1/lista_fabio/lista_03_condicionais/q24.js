/*leia os coeficientes a,b,c de uma equação de 2º grau e escreva suas raízes. Sendo a != 0*/

import { input } from "../../io_utils.js";

function main(){
    const a = Number(input('Informe o valor de a: '))
    const b = Number(input('Informe o valor de b: '))
    const c = Number(input('Informe o valor de c: '))

    const delta = b**2 - (4 * (a * c))
    const bhaskara_raiz_1 = (-b + Math.sqrt(delta)) / (2*a)
    const bhaskara_raiz_2 = (-b - Math.sqrt(delta)) / (2*a)

    if (a != 0 && bhaskara_raiz_1 >= 0 && bhaskara_raiz_2 >= 0){
        console.log(`O valor da raiz 1 é: ${bhaskara_raiz_1}`)
        console.log(`O valor da raiz 2 é: ${bhaskara_raiz_2}`)
        console.log(delta)
        console.log(bhaskara_raiz_1)
        console.log(bhaskara_raiz_2)
    }
    if (a != 0 && bhaskara_raiz_1 < 0){
        console.log(`O valor da raiz 1 é: ${bhaskara_raiz_1.toFixed(2)}`)
        console.log(`O valor da raiz 2 é: ${bhaskara_raiz_2}`)
    }

    if (a != 0 && bhaskara_raiz_2 < 0){
        console.log(`O valor da raiz 1 é: ${bhaskara_raiz_1}`)
        console.log(`O valor da raiz 2 é: ${bhaskara_raiz_2.toFixed(2)}`)
    }

    if(delta < 0){
        console.log('Não existem raízes reais, pois não existe raiz quadrada de número negativo')
    }

    else{
        console.log('Ambas as raízes serão 0')
    }

}

main()


// a = 3
// b = 5
// c = 2

// delta = (5²) - 4 * 3 * 2
// delta = 25 - 24
// delta = 1

//baskara_raiz_1 = -5 + 1 / 2*3
//bhaskara_raiz_1 = -4 / 6
//bhaskara_raiz_1 = -4 / 6 = -0,666666...7

//baskara_raiz_2 = -5 - 1 / 2*3
//bhaskara_raiz_2 = -6 / 6
//bhaskara_raiz_2 = -1

//x1 = 0,66666
//x2 = -1
