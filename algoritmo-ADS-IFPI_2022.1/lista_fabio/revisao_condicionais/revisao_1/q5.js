/*leia o preço de três produtos e informe qual produto deve ser comprado,
sabendo que a decisão é sempre pelo mais barato*/

import promt from 'prompt-sync'
const input = promt()

function main(){
    const produto1 = Number(input('Preço do produto 1: '))
    const produto2 = Number(input('Preço do produto 2: '))
    const produto3 = Number(input('Preço do produto 3: '))

    function produto_mais_barato(p1, p2, p3){
        if (p1 < p2 && p1 < p3){
            return 'O produto a ser levado é o produto 1'
        }
        if (p2 < p1 && p2 < p3){
            return 'O produto a ser levado é o produto 2'
        }
        if (p3 < p2 && p3 < p1){
            return 'O produto a ser levado é o produto 3'
        }
        else{
            return 'Pode levar qualquer um dos produtos, pois eles têm o mesmo preço'
        }
    }

    console.log(produto_mais_barato(produto1, produto2, produto3))
}

main()