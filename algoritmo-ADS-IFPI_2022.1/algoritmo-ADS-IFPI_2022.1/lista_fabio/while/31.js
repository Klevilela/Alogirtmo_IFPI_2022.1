/*Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/

import prompt from 'prompt-sync'
const input = prompt()

const num_decimal = input('Número: ')
//const qtd_digitos_num = num_decimal.length

let index = 0

while (num_decimal.length < 4){
    obter_decimal_em_romano()
}

function obter_decimal_em_romano(){
    return centena_em_romano(num_decimal)+dezena_em_romano(num_decimal)+unidade_em_romano(num_decimal)
}

function centena_em_romano(n){
    if (num_decimal[0] === '1'){return 'C'}
    if (num_decimal[0] === '2'){return 'CC'}
    if (num_decimal[0] === '3'){return 'CCC'}
    if (num_decimal[0] === '4'){return 'CD'}
    if (num_decimal[0] === '5'){return 'D'}
    if (num_decimal[0] === '6'){return 'DC'}
    if (num_decimal[0] === '7'){return 'DCC'}
    if (num_decimal[0] === '8'){return 'DCCC'}
    if (num_decimal[0] === '9'){return 'CM'}
}

function dezena_em_romano(n){
    if (num_decimal[1] === '1'){return 'X'}
    if (num_decimal[1] === '2'){return 'XX'}
    if (num_decimal[1] === '3'){return 'XXX'}
    if (num_decimal[1] === '4'){return 'XL'}
    if (num_decimal[1] === '5'){return 'L'}
    if (num_decimal[1] === '6'){return 'LX'}
    if (num_decimal[1] === '7'){return 'LXX'}
    if (num_decimal[1] === '8'){return 'LXXX'}
    if (num_decimal[1] === '9'){return 'XC'}
    if (num_decimal[1] === '0'){return centena_em_romano(n)}
    
}

function unidade_em_romano(n){
    if (num_decimal[2] === '1'){return 'I'}
    if (num_decimal[2] === '2'){return 'II'}
    if (num_decimal[2] === '3'){return 'III'}
    if (num_decimal[2] === '4'){return 'IV'}
    if (num_decimal[2] === '5'){return 'V'}
    if (num_decimal[2] === '6'){return 'VI'}
    if (num_decimal[2] === '7'){return 'VII'}
    if (num_decimal[2] === '8'){return 'VIII'}
    if (num_decimal[2] === '9'){return 'IX'}
    if (num_decimal[2] === '0'){return dezena_em_romano(n)+centena_em_romano(n)}
}


