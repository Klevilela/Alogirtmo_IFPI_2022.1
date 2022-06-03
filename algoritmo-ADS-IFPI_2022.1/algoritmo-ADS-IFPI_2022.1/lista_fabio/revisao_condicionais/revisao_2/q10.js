/*leia duas notas de um aluno e calcule a média. A média obedece a alguns conceitos
se média estiver entre 9 e 10 --- conceito A
se média estiver entre 7.5 e 9 --- conceito B
se média estiver entre 6 e 7.5 --- conceito C
se média estiver entre 4 e 6 --- conceito D
se média estiver entre 4 e 0 --- conceito E*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const nota1 = Number(input('Nota: '))
    const nota2 = Number(input('Nota: '))
    const media_aluno = media(nota1, nota2)
    const conceito_aluno = conceito(media_aluno)

    function media(n1, n2){
        const media = (n1 + n2) / 2
        return media
    }

    function conceito(m){
        if (media_aluno >= 9 && media_aluno <= 10){return `Média: ${media_aluno}\nConceito: A`}
        if (media_aluno >= 7.5 && media_aluno <= 9){return `Média: ${media_aluno}\nConceito: B`}
        if (media_aluno >= 6 && media_aluno <= 7.5){return `Média: ${media_aluno}\nConceito: C`}
        if (media_aluno >= 4 && media_aluno <= 6){return `Média: ${media_aluno}\nConceito: D`}
        if (media_aluno >= 4 && media_aluno <= 0){return `Média: ${media_aluno}\nConceito: E`}
    }

    console.log(conceito_aluno)
}

main()