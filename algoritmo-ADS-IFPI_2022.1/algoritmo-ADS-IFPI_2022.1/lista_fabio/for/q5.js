/*Leia um número, calcule e escreva seu fatorial.*/
import prompt from 'prompt-sync'
const input = prompt()

const numero = Number(input('Número: '))

let fatorial = 1
//let index = 1

for (let index = 1; index <= numero; index ++){
    fatorial *= index
}
console.log(fatorial)
