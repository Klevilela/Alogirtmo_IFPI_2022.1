/*Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').*/

import prompt from 'prompt-sync'
const input = prompt()

let cartao = input('Cartão: ').split(';')
let nome = cartao[0]
let altura = Number(cartao[1])
let peso = Number(cartao[2])

let peso_mais_magra = peso

while (cartao[0] !== 'fim'){
    cartao = input('Cartão: ').split(';')

    if (peso < cartao[2]){
        peso_mais_magra = cartao[2]
    }
}

console.log(peso)