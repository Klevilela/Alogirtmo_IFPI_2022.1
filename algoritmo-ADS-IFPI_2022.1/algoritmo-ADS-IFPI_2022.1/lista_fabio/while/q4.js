/*Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
resultado da última divisão efetuada. */
import prompt from 'prompt-sync'
const input = prompt()

const numero = Number(input('Número: '))
let resultado = numero
//let num_atual = numero

while ((numero / 2) > 1){
    if (numero > 0){
        resultado = resultado / 2
    }

    console.log(resultado.toPrecision())
}