/*Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand())
e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número
digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente
um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso,
escreva em quantas tentativas o usuário acertou.*/
import prompt from 'prompt-sync'
const input = prompt()

let numero_gerado = Math.floor(Math.random() * 999) - 100
console.log(numero_gerado)

let numero_digitado = Number(input('Número: '))

while (numero_digitado !== numero_gerado){
    numero_digitado = Number(input('Número: '))
}


