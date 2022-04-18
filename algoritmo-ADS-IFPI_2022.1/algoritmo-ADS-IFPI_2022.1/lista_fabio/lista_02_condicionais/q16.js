/*leia duas notas de um aluno e escreva 'aprovado' se a média for >= 7 e reprovado se for <7 */

function media(n1, n2) {
    const media = n1 + n2 / 2
    if (media >= 7) {
        console.log('Aprovado')
    } else {
        abaixo_da_media()
    }
}

function abaixo_da_media(n1, n2) {
    const nova_media = n1 + n2 / 2
    return nova_media
}

if (abaixo_da_media() >= 5) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}