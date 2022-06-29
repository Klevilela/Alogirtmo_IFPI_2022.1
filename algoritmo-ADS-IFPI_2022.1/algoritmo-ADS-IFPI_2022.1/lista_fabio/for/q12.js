/*Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.*/
import prompt from 'prompt-sync'
const input = prompt()

const qtd = Number(input('Lista de quantos números ?: '))

let soma = 0
let media
let index = 0 

for (index; index < qtd; index ++){
    
    let numero = Number(input('Número: '))
    soma += numero
    media = soma / qtd

}

console.log(`Soma: ${soma}`)
console.log(`Média: ${media.toFixed(2)}`)