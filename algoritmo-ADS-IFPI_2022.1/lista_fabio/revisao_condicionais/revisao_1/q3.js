/*leia uma letra e verifique se a letra digitada é vogal ou consoante*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const letra = input('Letra: ')

    if (eh_vogal(letra)){
        console.log(eh_vogal(letra))
    }
    else{
        console.log('É consoante')
    }

    function eh_vogal(l){
        //const vogal = ['a','e','i','o','u','A','E','I','O','U']

        if (l == 'a' || l === 'A'){
            return 'É vogal'
        }
        if (l == 'e' || l === 'E'){
            return 'É vogal'
        }
        if (l == 'i' || l === 'I'){
            return 'É vogal'
        }
        if (l == 'o' || l === 'U'){
            return 'É vogal'
        }
        if (l == 'u' || l === 'U'){
            return 'É vogal'
        }
    }
}

main()