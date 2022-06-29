/*Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.*/
import prompt from 'prompt-sync'
const input = prompt()

const numero = Number(input('Número: '))
const limite_inferior = Number(input('Limite inferior: '))
const limite_superior = Number(input('Limite superior: '))

let index= 0

for (index; index <limite_superior; limite_inferior){
    index ++
    if (limite_superior % index === 0){
        console.log(index)
    }
}

//console.log(index)