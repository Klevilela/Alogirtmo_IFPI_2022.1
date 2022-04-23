/*realize arredondamentos de números utilizando a regra usual da matemática:
se a parte fracionária for maior ou igual a 0,5 o número é arredondado para o inteiro imediatamente superior
caso contrário, é arredondado para o inteiro imediatamente inferior */

import { input } from "../../io_utils.js";

function main() {
    const numero = Number(input('Número: '))
    const parte_fracionaria = numero / 10
    //let numero_arredondado = numero


    if (parte_fracionaria >= 0.5) {
        const numero_arredondado_superior = Math.trunc(numero + 1)
        console.log(numero_arredondado_superior)
    }

    else if(parte_fracionaria < 0.5){
        const numero_arredondado_inferior = Math.trunc(parte_fracionaria - 1)
        console.log(numero_arredondado_inferior)
    }

    else{console.log(numero)}

}
main()

// 9.5, a parte fracionária é igual a 0.5 então arredondando vira 10