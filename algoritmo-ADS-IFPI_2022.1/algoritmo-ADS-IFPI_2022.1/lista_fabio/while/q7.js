/*Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.*/
import prompt from 'prompt-sync'
const input = prompt()

const primeiro_numero = Number(input('Número: '))
let numero_atual = Number(input('Número: '))

while (numero_atual !== primeiro_numero){
    numero_atual = Number(input('Número: '))
}
