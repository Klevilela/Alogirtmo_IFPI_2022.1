/*leia uma letra, verifique se a letra é 'f' ou 'm' se for uma letra diferente, sexo inválido*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const letra = input('Letra: ')

    if (eh_masculino_ou_feminino(letra)){
        console.log(eh_masculino_ou_feminino(letra))
    }

    function eh_masculino_ou_feminino(l){
        if (l === 'f'){
            return 'Feminino'
        }
        if (l === 'm'){
            return 'Masculino'
        }
        else{
            return 'Sexo inválido'
        }
    }
}

main()
