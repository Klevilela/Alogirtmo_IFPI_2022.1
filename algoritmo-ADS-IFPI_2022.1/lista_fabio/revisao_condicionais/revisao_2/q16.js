/*Escreva um progama que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal,
contendo as informações da compra: tipo e quanidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const tipo_carne = input('Informe o tipo de carne: ')
    const qtd_carne = Number(input('Informe a quantidade de carne(Kg): '))
    const forma_pagamento = input('Forma de pagamento: ')
    
    

    console.log(cupom_fiscal())
}

function valor_final(t, q, f){
    let valor_file
    let valor_picanha
    let valor_alcatra
    //let desconto

    if (t === 'file' && q <= 5){valor_file = 4.9 * q}
    if (t === 'file' && q > 5){valor_file = 5.8 * q}

    if (t === 'alcatra' && q <= 5){valor_alcatra = 5.9 * q}
    if (t === 'alcatra' && q <= 5){valor_alcatra = 6.8 * q}

    if (t === 'picanha' && q <= 5){valor_picanha = 6.9 * q}
    if (t === 'picanha' && q <= 5){valor_picanha = 7.8 * q}

    if (t === 'file' && f === 'cartao'){
        valor_file = valor_file - (0.05 * valor_file)
        return valor_file
    }
    if (t === 'alcatra' && f === 'cartao'){
        valor_file = valor_file - (0.05 * valor_file)
        return valor_file
    }
    if (t === 'picanha' && f === 'cartao'){
        valor_picanha = valor_picanha - (0.05 * valor_alcatra)
        return valor_alcatra
    }

}

function cupom_fiscal(){
    

    console.log(`Tipo de carne escolhida: ${tipo_carne}`)
    console.log(`Quantidade de carne: ${qtd_carne} Kg`)
    console.log(`Preço total: ${valor_final} R$`)
    console.log(`Tipo de pagamento: ${forma_pagamento}`)
    console.log(`Valor do desconto: 5%`)
    console.log(`Valor a pagar: ${valor_carne}`)
}


main()
