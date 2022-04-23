/*Leia 2 datas (d/m/a) e escreva qual delas é mais recente*/

import { input } from "../../io_utils.js";

function main(){
    const data1 = input('Data 1: ').split('/')
    const data2 = input('Data 2: ').split('/')
    //const data_recente = input('Data mais recente: ').split('/')
    const dia_data_recente = 1
    const mes_data_recente = 6
    const ano_data_recente = 2022

    const dia_data1 = Number(data1[0])
    const mes_data1 = Number(data1[1])
    const ano_data1 = Number(data1[2])

    const dia_data2 = Number(data2[0])
    const mes_data2 = Number(data2[1])
    const ano_data2 = Number(data2[2])

    //const dia_data_recente = Number(data_recente[0])
    //const mes_data_recente = Number(data_recente[1])
    //const ano_data_recente = Number(data_recente[2])

    
    if(data_mais_recente1(dia_data1, mes_data1, ano_data1)){
        console.log(data_mais_recente1(dia_data1, mes_data1, ano_data1))
    }
    if(data_mais_recente2(dia_data2, mes_data2, ano_data2)){
        console.log(data_mais_recente2(dia_data2, mes_data2, ano_data2))
    }

    function data_mais_recente1(d, m, a){
        if (d >= dia_data_recente && m >= mes_data_recente && a >= ano_data_recente){
            return `A data ${dia_data1}/${mes_data1}/${ano_data1} é a mais recente`
        }
    }

    function data_mais_recente2(d, m, a){
        if (d >= dia_data_recente && m >= mes_data_recente && a >= ano_data_recente){
            return `A data ${dia_data2}/${mes_data2}/${ano_data2} é a mais recente`
        }
    }

    function data_mais_recente(d, m, a){
        return d, m, a
    }
}

main()