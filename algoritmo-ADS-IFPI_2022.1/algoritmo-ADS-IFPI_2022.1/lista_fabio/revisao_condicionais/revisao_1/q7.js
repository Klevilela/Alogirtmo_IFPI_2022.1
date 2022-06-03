/*Escreva um algoritmo que leia o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual
salários até 280,00 --- aumento de 20%
salários entre 280,00 e 700,00 --- aumento de 15 %
salários entre 700,00 e 1500 --- aumento de 10 %
salários > 1500 --- aumento de 5 %

mostrar na tela:
- salário antes do reajuste
- o percentual do aumento aplicado
- o valor do aumento
- o novo salário, após o aumento
*/

import promt from 'prompt-sync'
const input = promt()

function main(){
    const salario = Number(input('Informe seu salário: '))
    const valor_reajuste = Number(input('Informe o valor do reajuste(%): '))

    const aumento = valor_reajuste / 100
    const percentual_aumento = aumento * 100

    function reajusta_salario(s, r){
        if (s <= 280 && r === 20){
            const reajuste = s * aumento
            const novo_salario_reajustado = s + reajuste
            
            return `Salário antes do reajuste: ${salario}\nPercentual do aumento aplicado: ${percentual_aumento} %\nValor do reajuste aplicado: ${reajuste}\nNovo salario reajustado: ${novo_salario_reajustado}`
        }
        if (s > 280 && s <= 700 && r === 15){
            const reajuste = s * aumento
            const novo_salario_reajustado = s + reajuste

            return `Salário antes do reajuste: ${salario}\nPercentual do aumento aplicado: ${percentual_aumento} %\nValor do reajuste aplicado: ${reajuste}\nNovo salario reajustado: ${novo_salario_reajustado}`
        }
        if (s > 700 && s <= 1500 && r === 10){
            const reajuste = s * aumento
            const novo_salario_reajustado = s + reajuste

            return `Salário antes do reajuste: ${salario}\nPercentual do aumento aplicado: ${percentual_aumento} %\nValor do reajuste aplicado: ${reajuste}\nNovo salario reajustado: ${novo_salario_reajustado}`
        }
        if (s > 1500 && r === 5){
            const reajuste = s * aumento
            const novo_salario_reajustado = s + reajuste

            return `Salário antes do reajuste: ${salario}\nPercentual do aumento aplicado: ${percentual_aumento} %\nValor do reajuste aplicado: ${reajuste}\nNovo salario reajustado: ${novo_salario_reajustado}`
        }
    }

    console.log(reajusta_salario(salario, valor_reajuste))

}

main()

//salario = 280
// 0,2 * 280 = 56
// novo salario = 280 + 56 = 336