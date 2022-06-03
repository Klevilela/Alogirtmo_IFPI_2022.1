/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração.*/

import prompt from 'prompt-sync'
const input = prompt()

const fracao1 = input('Fração 1: ').split('/')
const fracao2 = input('Fração 2: ').split('/')

const numerador_fracao_1 = Number(fracao1[0])
const denominador_fracao_1 = Number(fracao1[1])

const numerador_fracao_2 = Number(fracao2[0])
const denominador_fracao_2 = Number(fracao2[1])

const denominador = denominador_fracao_1 * denominador_fracao_2
const numerador = ((denominador / denominador_fracao_1) * numerador_fracao_1) + ((denominador /denominador_fracao_2 ) * numerador_fracao_2)
const resultado = numerador / denominador

console.log(`Soma das frações é: ${numerador}/${denominador}`)
console.log(`O resultado da soma das frações é: ${resultado}`)