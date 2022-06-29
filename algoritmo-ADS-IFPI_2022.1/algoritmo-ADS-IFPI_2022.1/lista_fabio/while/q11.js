/*Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)/10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma. */

import prompt from 'prompt-sync'
const input = prompt()

let matricula = Number(input('Matrícula: '))

let contador_aprovados = 0
let contador_reprovados = 0
let total_alunos = 0


const peso1 = 2
const peso2 = 3
const peso3 = 5

let nota1
let nota2
let nota3

while (matricula > 0){
    nota1 = Number(input('Nota: '))
    nota2 = Number(input('Nota: '))
    nota3 = Number(input('Nota: '))
    matricula = Number(input('Matrícula: '))

    total_alunos += 1

    if (media(nota1, nota2, nota3) >= 7){
        contador_aprovados += 1
    }
    else{
        contador_reprovados += 1
    }

}

function media(n1, n2, n3){
    let media = (peso1 * n1 + peso2 * n2 + peso3 * n3) / 10
    return media
}
 
console.log(`Total de alunos: ${total_alunos}`)
console.log(`Total de aprovados: ${contador_aprovados}`)
console.log(`Total de reprovados: ${contador_reprovados}`)

console.log(media(4, 5, 7))