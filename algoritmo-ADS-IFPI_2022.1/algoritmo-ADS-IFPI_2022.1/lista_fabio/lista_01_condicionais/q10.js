/*Leia uma data(d, m, a), verifique se a data é ou não vale*/

import {input} from '../../io_utils.js';

function main(){

    const data = input('Digite a data: ').split('/')
    
    const dia = data[0]
    const mes = data[1]
    const ano = data[2]

    //data válida
    if(dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && ano >= 0){
        console.log('Data válida')
    } else{
        console.log('Data inválida')
    }

}

main()