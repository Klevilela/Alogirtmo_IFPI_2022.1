/*Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno. */

import prompt from 'prompt-sync'
const input = prompt()

let votos_dilma = 0
let votos_serra = 0
let votos_ciro = 0
let votos_outros = 0
let votos_indecisos = 0
let votos_nulos_ou_brancos = 0

let total_entrevistados = 0

let voto = Number(input('Voto: '))

while (voto !== -1){
    
    total_entrevistados += 1
    voto = Number(input('Voto: '))

    if (voto === 13){
        votos_dilma += 1
    }
    if (voto === 45){
        votos_serra += 1
    }
    if (voto === 23){
        votos_ciro += 1
    }

    if (voto === 98){
        votos_outros += 1
    }
    if (voto === 99){
        votos_indecisos += 1
    }
    if (voto === 0){
        votos_nulos_ou_brancos += 1
    }
    
}

const porcentagem_dilma = (votos_dilma / total_entrevistados) * 100
const porcentagem_ciro = (votos_ciro / total_entrevistados) * 100
const porcentagem_serra = (votos_serra / total_entrevistados) * 100
const porcentagem_indecisos = (votos_indecisos / total_entrevistados) * 100
const porcentagem_nulos_ou_brancos = (votos_nulos_ou_brancos / total_entrevistados) * 100
const porcentagem_outros = (votos_outros / total_entrevistados) * 100

console.log(`Porcentagem de votos - Dilma: ${porcentagem_dilma.toFixed(2)} %`)
console.log(`Porcentagem de votos - Ciro Gomes: ${porcentagem_ciro.toFixed(2)} %`)
console.log(`Porcentagem de votos - Daniel Serra: ${porcentagem_serra.toFixed(2)} %`)
console.log(`Porcentagem de votos - Indecisos: ${porcentagem_indecisos.toFixed(2)} %`)
console.log(`Porcentagem de votos - NUlos ou brancos: ${porcentagem_nulos_ou_brancos.toFixed(2)} %`)
console.log(`Porcentagem de votos - Outros: ${porcentagem_outros.toFixed(2)} %`)
console.log(`Total de entrevistados: ${total_entrevistados}`)