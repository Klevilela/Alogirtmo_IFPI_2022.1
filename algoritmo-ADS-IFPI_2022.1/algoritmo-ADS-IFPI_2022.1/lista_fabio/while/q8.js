/*Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo
quando a soma de dois números consecutivos da lista for igual a X. */
import prompt from 'prompt-sync'
const input = prompt()

const numero = Number(input('Número: '))

let anterior = Number(input('Número: '))
let posterior = Number(input('Número: '))
let soma = anterior + posterior

while (soma != numero){
    anterior = posterior
    posterior = Number(input('Número: '))
    //posterior = Number(input('Número: '))      
}