
export function vetor_automatico(tamando_do_vetor){
    const valor_aletorio = Math.floor(Math.random() * 256)

    for (let index = 0; index < tamando_do_vetor.length; index++) {
        vetor[index] = valor_aletorio
    }
}

