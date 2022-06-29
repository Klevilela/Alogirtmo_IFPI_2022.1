/*Leia N e escreva todos os números inteiros de 1 a N. */

import prompt from 'prompt-sync'
const input = prompt()

const n = Number(input('Número: '))

for (let i = 1; i < n+1; i ++){
    console.log(i)
}