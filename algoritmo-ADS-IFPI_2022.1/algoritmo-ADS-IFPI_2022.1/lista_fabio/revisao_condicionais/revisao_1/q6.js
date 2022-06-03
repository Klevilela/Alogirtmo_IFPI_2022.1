/*leia o turno que em que o aluno estuda, sendo M para matutino ou V para verspentino ou N para noturno
e escreva a mensagem 'Bom dia !', 'Boa tarde !', ou 'Boa noite' ou 'Valor inválido'*/

import prompt from 'prompt-sync'
const input = prompt()

function main(){
    const valor_turno = input('Informe o turno: ')

    function turno(t){
        if (t === 'm' || t === 'M'){
            return 'Bom dia !'
        }
        if (t === 'v' || t === 'V'){
            return 'Boa tarde !'
        }
        if (t === 'n' || t === 'N'){
            return 'Boa noite !'
        }
        else{
            return 'Valor inválido'
        }
    }

    console.log(turno(valor_turno))
}

main()