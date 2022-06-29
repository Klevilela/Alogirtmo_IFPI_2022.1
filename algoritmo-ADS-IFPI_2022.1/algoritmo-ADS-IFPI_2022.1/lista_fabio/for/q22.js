/*Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,
nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o
numero de identificação e o peso do boi mais magro e do boi mais gordo.*/
import prompt from 'prompt-sync'
const input = prompt()

const qtd_fichas = Number(input('Quantidade de fichas: '))

let ficha

let id
let nome
let peso

let peso_mais_magro
let peso_mais_gordo

for (let index = 0; index < qtd_fichas; index ++){
    ficha = input(`Ficha: `).split(';')

    id = ficha[0]
    peso = Number(ficha[2])
}



if (peso_mais_magro < peso_mais_gordo){
    peso_mais_gordo = peso
    console.log(`Id do boi mais gordo: ${id}\nPeso do boi mais gordo: ${peso_anterior}`)  
}
else{
    peso_mais_magro = peso
    console.log(`Id do boi mais magro: ${id}\nPeso do boi mais magro: ${peso_anterior}`)
}
