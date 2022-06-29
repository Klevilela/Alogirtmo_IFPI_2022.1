/*Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido. */
import prompt from 'prompt-sync'
const input = prompt()

const numero = Number(input('Número: '))

let soma = 0
let index = 1

for (index; index < numero+1; index ++){
    
    soma += index
    
}

console.log(soma)

