/*leia duas notas de um aluno e escreva, calcule a média e escreva a mensagem
se media >= 7 --- aprovado
se media < 7 --- reprovado
se media == 10 --- aprovado com distincao
*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nota1 = Number(input('Nota 1: '))
    const nota2 = Number(input('Nota 2: '))

    if (esta_aprovado(nota1, nota2) >= 7 && esta_aprovado(nota1,nota2)<10){
        console.log('O aluno está aprovado !')
    }
    else if(esta_reprovado(nota1, nota2) < 7){
        console.log('O aluno está reprovado !')
    }
    else if(esta_aprovado_com_distincao(nota1, nota2) === 10){
        console.log('Aprovado com distição')
    }

    function esta_aprovado(n1, n2){
        const media = (n1 + n2) / 2
        return media
        
    }

    function esta_reprovado(n1, n2){
        const media = (n1 + n2) / 2
        return media
 
    }

    function esta_aprovado_com_distincao(n1, n2){
        const media = (n1 + n2) / 2
        return media
        
    }

}

main()