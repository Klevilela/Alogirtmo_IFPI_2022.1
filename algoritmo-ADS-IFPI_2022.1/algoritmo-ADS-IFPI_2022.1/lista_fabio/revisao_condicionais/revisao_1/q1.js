/*leia um número e escreva na tela se o número é positivo ou negativo*/
import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const numero = Number(input('Número: '))

    if (eh_positivo(numero)){
        console.log(eh_positivo(numero))
    }

    else if(eh_negativo(numero)){
        console.log(eh_negativo(numero))
    }

    function eh_positivo(n){
        if (n > 0){
            return 'É positivo'
        }
    }

    function eh_negativo(n){
        if (!eh_positivo(n)){
            return 'É negativo'
        }
    }
}

main()