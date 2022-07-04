import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const qtd_candidatos = Number(input('Quantidade de candidatos a exibir na enquete: '))
    const vetor_candidatos = new Array(qtd_candidatos)
    const nomes_candidatos = obter_nome_dos_candidatos(vetor_candidatos)

    const votos = new Array(qtd_candidatos)
    //const quantidade_de_votos = obter_qtd_votos(votos)
    //console.log(obter_nome_dos_candidatos(nome[1]))
    console.log(nomes_candidatos)
    

}

/*function obter_qtd_votos(votos){
    let contador_candidato = 0
    let contador_brancos = 0
    let contador_nulos = 0
    let contador_sem_opiniao = 0
    
    let voto

    while (voto > -1){
        voto = Number(input('Voto: '))

        if (voto === candidatos[])
    }

    

    return contador
}*/


function obter_nome_dos_candidatos(nomes){
    let posicao_candidato

    for (let i = 0; i < nomes.length; i++) {
        nomes[i] = input('Nome: ')
        for (let j = 0; j < nomes.length; j++) {
           posicao_candidato = nomes[j]
        }
    }

    return nomes
}



/*function menu(){
    let candidatos
    candidatos = `${}`
}*/


main()