/*Leia dois valores e uma das seguintes operações a serem executadas
codigo da operação = 1 - adição
codigo da operação = 2 - subtração
codigo da operação = 3 - multiplicação
codigo da operação = 4 - divisão*/

import { input } from "../../io_utils.js";

function main() {
    const codigo_da_operacao = Number(input('Código da operação: '))

    const valor_1 = Number(input('Valor: '))
    const valor_2 = Number(input('Valor: '))

    if (codigo_da_operacao === 1) {
        console.log(adicao(valor_1, valor_2))
    }
    if (codigo_da_operacao === 2) {
        console.log(subtracao(valor_1, valor_2))
    }
    if (codigo_da_operacao === 3) {
        console.log(multiplicacao(valor_1, valor_2))
    }
    if (codigo_da_operacao === 4) {
        console.log(divisao(valor_1, valor_2))
    }


    function adicao(v1, v2) {
        const soma = v1 + v2
        return soma
    }

    function subtracao(v1, v2) {
        const diferenca = v1 - v2
        return diferenca
    }

    function multiplicacao(v1, v2) {
        const produto = v1 * v2
        return produto
    }

    function divisao(v1, v2) {
        const resultado_divisao = v1 / v2
        return resultado_divisao
    }
}

main()