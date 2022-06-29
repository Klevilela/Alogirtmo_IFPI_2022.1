/*Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão
Aritmética que tem por valor inicial A0 e razão R. */
import prompt from 'prompt-sync'
const input = prompt()

const a0 = Number(input('Número: '))
const limite = Number(input('Número: '))
const razao = Number(input('Número: '))

let index = 0

for (a0; index < limite; index += razao){

    console.log(index)
}
