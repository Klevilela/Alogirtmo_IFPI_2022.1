/*Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado.*/

import prompt from 'prompt-sync'
const input = prompt()

let numero = Number(input('Número: '))
let qtd_somas_numero = Number(input('Número: '))
let contador = 0

while (qtd_somas_numero){
    contador ++
    numero = numero + numero
}

console.log(numero)