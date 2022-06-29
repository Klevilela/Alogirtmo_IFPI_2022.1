/*Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário. */

import prompt from 'prompt-sync'
const input = prompt()

let ponto = Number(input('Jogador que fez o ponto: '))

const placar = 10

let placar_jogador1 = 0
let placar_jogador2 = 0

let diferenca_jogador1
let diferenca_jogador2



while (ponto === 1 || ponto === 2){
    ponto = Number(input('Jogador que fez o ponto: '))
    
    diferenca_jogador1 = placar_jogador1 - placar_jogador2
    diferenca_jogador2 = placar_jogador2 - placar_jogador1

    if (placar_jogador1 >= placar || diferenca_jogador1 >= 2){
        console.log('\nJogador 1 venceu a partida !')
    }
    if (placar_jogador2 >= placar || diferenca_jogador2 >= 2){
        console.log('\nJogador 2 venceu a partida !')
    }

    if (ponto === 1){
        //jogador1 = ponto
        placar_jogador1 += 1
        console.log(`\nJogador 1: ${placar_jogador1}`)
    }
    if (ponto === 2){
        //jogador2 = ponto
        placar_jogador2 += 1
        console.log(`\nJogador 2: ${placar_jogador2}`)
    }

}

