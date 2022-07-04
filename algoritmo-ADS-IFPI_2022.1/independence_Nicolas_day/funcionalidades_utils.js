import prompt from 'prompt-sync'
const input = prompt()


export function receber_valor_numerico(mensagem, valor){

    while (!valor <= 0 || valor >= 0){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_positivo(mensagem, valor){

    while (valor < 0){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_negativo(mensagem, valor){
    while (valor > 0){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_nao_nulo(mensagem, valor){
    while (valor < 0 || valor > 0){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_minimo(mensagem, valor_min, valor){
    while (valor < valor_min){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_maximo(mensagem, valor_max, valor){
    while (valor > valor_max){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_entre_m_e_n(mensagem, valor_a, valor_b, valor){
    while (valor > valor_a && valor > valor_b){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_um_valor_texto(mensagem, caracteres){
    //const eh_texto = isNaN(caracteres)

   caracteres = input(mensagem)

    return caracteres
}


export function receber_um_texto_de_no_minimo_n_caracteres(mensagem, qtd_caracteres, caracteres){
    const tamanho = qtd_caracteres.length
    const tamanho_caracteres_informados = caracteres.length
    let contador_caracteres = 0

    for (let i = 0; i < tamanho; i++) { 
        contador_caracteres += 1    
    }

    if (contador_caracteres < tamanho_caracteres_informados){
        caracteres = input(mensagem)
    }

    return caracteres

}

export function receber_um_texto_de_no_maximo_n_caracteres(mensagem, qtd_caracteres, caracteres){
    const tamanho = qtd_caracteres.length
    const tamanho_caracteres_informados = caracteres.length
    let contador_caracteres = 0

    for (let i = 0; i < tamanho; i++) { 
        contador_caracteres += 1    
    }

    if (contador_caracteres > tamanho_caracteres_informados){
        caracteres = input(mensagem)
    }

    return caracteres

}

export function receber_valor_minimo_de_caracteres(mensagem, valor_min, valor){
    while (valor < valor_min){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_valor_maximo_de_caracteres(mensagem, valor_min, valor){
    while (valor < valor_min){
        valor = Number(input(mensagem))
    }

    return valor
}

export function receber_um_valor_texto_de_no_maximo_n_caracteres(mensagem, qtd_caracteres, caracteres){
    const tamanho = qtd_caracteres.length
    const tamanho_caracteres_informados = caracteres.length
    let contador_caracteres = 0

    for (let i = 0; i < tamanho; i++) { 
        contador_caracteres += 1    
    }

    if (contador_caracteres < tamanho){
        caracteres = input(mensagem)
    }

    return caracteres

}

/*export function receber_valor_entre_m_e_n(mensagem, valor_a, valor_b, valor){
    while (valor > valor_a && valor > valor_b){
        valor = Number(input(mensagem))
    }

    return valor
}*/


export function receber_data_valida(mensagem, d, m, a){

    while (d > 31 || m > 12 || a < 0){
        d, m, a = input(mensagem).split('/').map(Number)

        if (d === 29 && m === 2){
            data = input(mensagem)
        }
    }

    return data
}
