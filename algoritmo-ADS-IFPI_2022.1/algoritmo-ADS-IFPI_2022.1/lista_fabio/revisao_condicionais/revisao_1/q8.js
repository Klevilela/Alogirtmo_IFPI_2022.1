/*tendo em vista que seu salário líquido provém do ir e do sindicato(3%). Temos que o salário líquido é 
a diferença do salário bruto - impostos(ir e sindicato)

peça a hora e qtd de horas trabalhadas no mês

quanto ao imposto de renda

se o salário for até 900 --- isento
se o salário for até 1500 --- desconto de 5%
se o salário for de até 2500 --- desconto de 10%
se o salário for acima de 2500 --- desconto de 20 %

escreva na tela o salário (h x vh) e o próprio salário
o valor descontado do ir
o valor descontado do sindicato
o total de descontos
e o salário líquido*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_horas_trabalhadas = Number(input('Informe a quantidade de horas trabalhas no mês: '))
    const valor_hora_trabalhada = Number(input('Informe o valor das horas trabalhas: '))
    
    const salario_bruto = qtd_horas_trabalhadas * valor_hora_trabalhada
    const sindicato = salario_bruto * 0.03

    const desconto_ir = imposto_de_renda(salario_bruto)
    const impostos = desconto_ir + sindicato


    function imposto_de_renda(s){
        if (s <= 900){
            return 'Isento'
        }
        if (s <= 1500){
            const desconto = salario_bruto * 0.05
            return desconto
        }
        if (s <= 2500){
            const desconto = salario_bruto * 0.1
            return desconto
        }
        if (s > 2500){
            const desconto = salario_bruto * 0.2
            return desconto
        }
    }

    function salario_liquido(s){
        
        if (s <= 900){
            const salario_final = salario_bruto - sindicato
            return salario_final 
        }
        if (s <= 1500){
            const salario_final = salario_bruto - impostos
            return salario_final
        }
        if (s <= 2500){
            const salario_final = salario_bruto - impostos
            return salario_final
        }
        if (s > 2500){
            const salario_final = salario_bruto - impostos
            return salario_final
        }
    }

    function mostrar_salario(){
        return `\n
        \nSalário bruto: (${valor_hora_trabalhada} * ${qtd_horas_trabalhadas} = ${salario_bruto} R$) 
        \n(-)IR: ${imposto_de_renda(salario_bruto)} R$
        \n(-)Sindicato: ${sindicato} R$
        \nTotal de impostos: ${impostos} R$
        \nSalário líquido: ${salario_liquido(salario_bruto)} R$ 
        `
    }

    console.log(mostrar_salario())
}

main()
