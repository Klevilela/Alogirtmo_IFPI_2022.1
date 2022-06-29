/*Leia N e escreva todos os números inteiros pares de 1 a N. */
import prompt from 'prompt-sync'
const input = prompt()

const n = Number(input('Número: '))

for (let i = 0; i < n+1; i ++){
    if (i % 2 === 0){
        console.log(i)
    }
}