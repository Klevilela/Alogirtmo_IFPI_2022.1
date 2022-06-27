import prompt from 'prompt-sync'
const input = prompt()

import { vetor_automatico } from './funcionalidades.js'

function main(){
    menu()
    let codigo = Number(input('Código: '))

    while (codigo >= 1 && codigo < 16){
        codigo = Number(input('Código: '))

        if (codigo === 1){
            
            console.log('1-Vetor com dados automáticos\nPedir tamanho e restrições de mínimo e máximo')
            let opcao = Number(input())
            let tamanho
            let min
            let max

            if (opcao === 1){
                tamanho = Number(input('Tamanho do vetor: '))
                console.log(vetor_automatico(tamanho))
            }else if(opcao === 2){
                tamanho = Number(input('Tamanho do vetor: '))
                min = Number(input('Valor máxmo'))
                max = Number(input('Valor mínimo'))

                console.log(vetor_com_restricoes())
            }
        }
    }

    if (codigo === 2){
        console.log(mostrar_vetor())
    }


}

function menu(){

    let menu = '---MENU---'
    menu +='\n1- Incializar um vetor numérico'
    menu += '\n2- Mostrar todos os valores'
    menu += '\n3- Resetar vetor'
    menu += '\n4- Ver quantidade de itens do vetor'
    menu += '\n5- Ver menor e maior e suas posições'
    menu += '\n6- Média dos valores'
    menu += '\n7- Somatório dos valores'
    menu += '\n8- Mostrar valores positivos e quantidade'
    menu += '\n9- Mostrar valores negativos e suas quantidades'
    menu += '\n10- Mostrar valores por uma das regras:    \n1- Multiplicar por um valor   \n2- Elevar a um valor'
    menu += '\n11- Adicionar novos valores'
    menu += '\n12- Remover itens por valor exato'
    menu += '\n13- Remover por posição'
    menu += '\n14- Editar valor específico por posição'
    menu +='\n15- Salvar valores em arquivo (https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/)'
    menu += '\n16- Sair'

    console.log(menu)
}

main()