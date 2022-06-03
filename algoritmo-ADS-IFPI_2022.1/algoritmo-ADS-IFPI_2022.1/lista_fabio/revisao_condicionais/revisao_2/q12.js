/* leia um número e escreva se ele é inteiro ou decimal*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero = Number(input('Número: '))
    const nuemro_inteiro = parseInt(numero)

    function eh_inteiro(n){
        if (n === nuemro_inteiro){return 'É inteiro'}
        else{return 'É decimal'}
    }

    console.log(eh_inteiro(numero))
}

main()