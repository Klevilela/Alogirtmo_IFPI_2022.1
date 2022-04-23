/*leia a hora do inicio de um jogo e a hora do fim do jogo(compostas por hora e minuto)
calcule e escreva a duração do jogo em HORAS E MINUTOS, sabendo que o tempo máximo de duração do jogo é 24h
e que ele pode iniciar-se em um dia e terminar no dia seguinte*/

import { input } from "../../io_utils.js";

function main(){
    const hora_inicio_jogo = input('Hora do início do jogo: ').split(':')
    const hora_final_jogo = input('Hora do final do jogo: ').split(':')

    const hora_inicio = Number(hora_inicio_jogo[0])
    const minuto_inicio = Number(hora_inicio_jogo[1])

    const hora_final = Number(hora_final_jogo[0])
    const minuto_final = Number(hora_final_jogo[1])

    const duração_horas_da_partida = hora_final - hora_inicio
    const duracao_minutos_da_partida = minuto_final - minuto_inicio

    const quantidade_horas_dia = 24
    const hora_limite = 0

    if (minuto_inicio === 30 && minuto_final === 0){
        
        const duracao_horas_da_partida = (hora_final - hora_inicio) - 1
        const duracao_minutos_da_partida = (minuto_final - minuto_inicio) *(-1)

        console.log(`A partida durou ${duracao_horas_da_partida} hora(s) e ${duracao_minutos_da_partida} minuto(s)`)
    }

    // calcular a duração quando a partida continua no outro dia
    if (hora_final >= hora_limite && hora_final < hora_inicio){
        const duração_horas_da_partida = quantidade_horas_dia - (hora_inicio - hora_final)
        console.log(`A duração da partida foi\n${duração_horas_da_partida} hora(s) e ${duracao_minutos_da_partida} minutos`)
    }

    else{console.log(`A duração da partida foi\n${duração_horas_da_partida} hora(s) e ${duracao_minutos_da_partida} minutos`)}
}

main()



// hora do inicio = 14:00
// hora do final = 16: 30
// duração da partida = 2:30

// 