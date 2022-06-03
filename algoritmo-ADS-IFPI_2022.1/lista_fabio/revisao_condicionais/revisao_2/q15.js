/*Uma frutaira está vendendo frutas com a seguinte tabela de preços. Se o cliente comprar mais de 8 kg em frutas ou o valor total
da compra ultrapassar 25,00 receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quabntidade
de frutas(kg) de morangos e a quantidade de maçãs(kg) adquiridas e escreva o valor a ser pago pelo cliente*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_kg_morango = Number(input('Informe a quantidade de morango(kg): '))
    const qtd_kg_maca = Number(input('Informe a quantidade de maçã(kg): '))
    

    console.log(valor_compra_frutas(qtd_kg_morango, qtd_kg_maca))
}

function valor_compra_frutas(mo, ma){
    let valor_do_morango
    let valor_da_maca

    if (mo <= 5){valor_do_morango = mo * 2.5}
    if (mo > 5){valor_do_morango = mo * 2.2}
    if (ma <= 5){valor_da_maca = ma * 1.8}
    if (ma > 5){valor_da_maca = ma * 1.5}

    const valor_final = valor_do_morango + valor_da_maca
    const valor_das_frutas_kg = mo + ma

    if (valor_final > 25 || valor_das_frutas_kg > 8){
        const desconto = valor_final - (valor_final * 0.1)
        return `O valor a ser pago com desconto de 10% é ${desconto} R$`
    }
    else{return `Valor total a pagar: ${valor_final.toFixed(2)} R$`}
    
}

main()
