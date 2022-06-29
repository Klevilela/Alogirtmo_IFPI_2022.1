/*Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0) */

import prompt from 'prompt-sync'
const input = prompt()


    
let salario_funcionarios = Number(input('Salário R$: '))

let contador_salarios = 0
let soma_salarios_reajustados = 0
let soma_salarios_atuais = 0

let salario_reajustado

let diferenca

let novo_salario = acrescimo_salario(salario_funcionarios)

while (salario_funcionarios > 0){
        
    contador_salarios += 1
    soma_salarios_reajustados += novo_salario
    soma_salarios_atuais += salario_funcionarios

    salario_funcionarios = Number(input('Salário R$: '))

}

    diferenca = soma_salarios_reajustados - soma_salarios_atuais

    console.log(`Quantidade de salários lidos: ${contador_salarios}`)
    console.log(`Somatório de salários reajustados: ${soma_salarios_reajustados} R$`)
    console.log(`Diferença: ${diferenca} R$`)


function acrescimo_salario(salario){

    if (salario >= 0 && salario <= 2999.99){
        salario_reajustado =  salario * 1.25
    }
    if (salario >= 3000 && salario <= 5999.99){
        salario_reajustado =  salario * 1.2 
    }
    if (salario >= 6000 && salario <= 9999.99){
        salario_reajustado =  salario * 1.15 
    }
    else{
        salario_reajustado =  salario * 1.1 
    }

    return salario_reajustado
}

