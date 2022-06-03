/*Um posto está vendendo combustíveis com a seguinte com a seguinte tabela de descontos:
1 - álcool: se for até 20 litros, 3% por litro
            acima de 20 litros, 5% por litro

2- gasolina: até 20 l, 4% por litro
             acima de 20 l, desconto de 5% por litro

escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível(codificado da seguinte forma: A- álcool; G- gasolina)
calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é 2,50 e o litro de álcool é 1,90 
*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const litros_vendidos = Number(input('Quantidade de litros vendidos: '))
    const combustivel = input('a- álcool; g- gasolina: ')

    console.log(desconto_combustivel(litros_vendidos, combustivel))
}

function desconto_combustivel(l, c){
    const valor_alcool = 1.9
    const valor_gasolina = 2.5
 
    if (l <= 20 && c === 'g'){
        const valor_desconto = (valor_gasolina - (valor_gasolina * 0.04))
        const valor_final = l * valor_desconto
        return `O valor a ser pago com desconto de 3% em cada litro da gasolina é ${valor_final.toFixed(2)} R$`
    }

    if (l > 20 && c === 'g'){
        const valor_desconto = (valor_gasolina - (valor_gasolina * 0.05))
        const valor_final = l * valor_desconto
        return `O valor a ser pago com desconto de 5% em cada litro da gasolina é ${valor_final.toFixed(2)} R$`
    }

    if (l <= 20 && c === 'a'){
        const valor_desconto = (valor_alcool - (valor_alcool * 0.03))
        const valor_final = l * valor_desconto
        return `O valor a ser pago com desconto de 4% em cada litro do álcool é ${valor_final.toFixed(2)} R$`
    }

    if (l > 20 && c === 'a'){
        const valor_desconto = (valor_alcool - (valor_alcool * 0.05))
        const valor_final = l * valor_desconto
        return `O valor a ser pago com desconto de 5% em cada litro do álcool é ${valor_final.toFixed(2)} R$`
    }
}

main()
