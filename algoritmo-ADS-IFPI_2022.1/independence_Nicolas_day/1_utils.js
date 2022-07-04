import prompt from 'prompt-sync'
const input = prompt()

import { 
    receber_data_valida,
    receber_um_texto_de_no_minimo_n_caracteres,
    receber_um_valor_texto, receber_valor_entre_m_e_n,
    receber_valor_maximo, receber_valor_minimo,
    receber_valor_nao_nulo, receber_valor_negativo,
    receber_valor_numerico,
    receber_valor_positivo } from './funcionalidades_utils.js'

function main(){
    console.log(menu())

    let opcao = Number(input('Código: '))

    while (opcao > 0 || opcao > 16){
        opcao = Number(input('Código: '))

        if (opcao === 1){
            const numero = Number(input('Número: '))
            receber_valor_numerico('Informe um valor numérico: ', numero)
        }
        if (opcao === 2){
            let numero = Number(input('Valor positvo: '))
            receber_valor_positivo('Valor: ', numero)
        }
        if (opcao === 3){
            let numero =  Number(input('Valor: '))
            receber_valor_negativo('Valor incorreto. Informe um valor abaixo de 0: ', numero)
        }
        if (opcao === 4){
            let numero  = Number(input('Informe um valor não-nulo: '))
            receber_valor_nao_nulo('Valor: ', numero)
        }
        if (opcao === 5){
            let numero_minimo = Number(input('Valor: mínimo: '))
            let valor = Number(input('Valor: '))
            receber_valor_minimo(`Informe um valor acima de ${numero_minimo}: `, numero_minimo, valor)
        }
        if (opcao === 6){
            let valor_maximo = Number(input(`Informe um valor máximo: `))
            let valor = Number(input(`Informe um valor abaixo de ${valor_maximo}: `))

            receber_valor_maximo(`Valor incorreto. Insira um valor abaixo de ${valor_maximo}: `, valor_maximo, valor)
        }
        if (opcao === 7){
            const valor_m = Number(input('Informe o valor:'))
            const valor_n = Number(input('Informe o valor:'))
            let valor = Number(input('Valor: '))

            receber_valor_entre_m_e_n(`Informe um valor entre ${valor_m} e ${valor_n}: `, valor_m, valor_n, valor)
        }

        if (opcao === 8){
            receber_um_valor_texto('Informe um texto: ', texto)
        }

        if (opcao === 9){
            let tamanho_do_texto = Number(input('Informe a quantidade mínima de caracteres: '))
            let texto = input('Texto: ')

            receber_um_texto_de_no_minimo_n_caracteres('Informe um texto: ', tamanho_do_texto, texto)
        }
        if (opcao === 10){
            let tamanho_do_texto = Number(input('Informe a quantidade mínima de caracteres: '))
            let texto = input('Texto: ')

            receber_um_texto_de_no_minimo_n_caracteres('Informe um texto: ', tamanho_do_texto, texto)
        }

        if (opcao === 15){
            const data = Number(input('Data: ').split('/'))

            receber_data_valida('Informe uma data válida: ', data)
        }

    }
    


}

function menu(){
    let menu = '1- Receber um valor numérico'
    menu += '\n2- Receber um numérico positivo'
    menu += '\n3- Receber um numérico negativo'
    menu += '\n4- Receber um numérico não-nulo'
    menu += '\n5- Receber um valor numérico de valor mínimo N'
    menu += '\n6- Receber um valor numérico de valor mínimo N'
    menu += '\n7- Receber um numérico entre M e N'
    menu += '\n8- Receber um texto'
    menu += '\n9- Receber um valor texto de no mínimo N caracteres'
    menu += '\n10- Receber um valor texto de no máximo N caracteres'
    menu += '\n11- Receber um valor texto com tamanho entre M e N caracteres'
    menu += '\n12- Receber um valor texto de no máximo N palavras'
    menu += '\n13- Receber um valor texto de no mínimo N palavras'
    menu += '\n14- Receber um valor texto de acordo com a lista de opções (ex: [sim, nao], [1,2]'
    menu += '\n15- Receber uma data válida no padrão dd/mm/aaaa'

    return menu
}

main()