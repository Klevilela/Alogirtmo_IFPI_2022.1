/*Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição. */

import prompt from 'prompt-sync'
const input = prompt()

const qtd_votos = Number(input('Votar quantas vezes: '))
let voto

let contador_candidato_1 = 0
let contador_candidato_2 = 0
let contador_candidato_3 = 0
let votos_nulos = 0
let votos_em_branco = 0

let index= 0 

for(index; index<qtd_votos; index ++){
    voto = Number(input('Votar para quem ?: '))

    if (voto === 1){
        contador_candidato_1 += 1
    }
    if (voto === 2){
        contador_candidato_2 += 1
    }
    if (voto === 1){
        contador_candidato_3 += 1
    }
    if (voto === 9){
        votos_nulos += 1
    }
    if (voto === 0){
        votos_em_branco += 1
    }
    
}

console.log(`Quandtidade de votos do candidato 1: ${contador_candidato_1}`)
console.log(`Quandtidade de votos do candidato 2: ${contador_candidato_2}`)
console.log(`Quandtidade de votos do candidato 3: ${contador_candidato_3}`)
console.log(`Quandtidade de votos nulos: ${votos_nulos}`)
console.log(`Quandtidade de votos em branco: ${votos_em_branco}`)

if (contador_candidato_1 > contador_candidato_2 && contador_candidato_1 > contador_candidato_3){
    console.log('Candidato 1 venceu a eleição !')
}
if (contador_candidato_2 > contador_candidato_3 && contador_candidato_2 > contador_candidato_1){
    console.log('Candidato 2 venceu a eleição !')
}
if (contador_candidato_3 > contador_candidato_2 && contador_candidato_3 > contador_candidato_2){
    console.log('Candidato 3 venceu a eleição !')
}