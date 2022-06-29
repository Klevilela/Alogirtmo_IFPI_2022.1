/*Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos. */
import prompt from 'prompt-sync'
const input = prompt()

const limite_inferior = Number(input('Limite inferior: '))
const limite_superior = Number(input('Limite superior: '))

let index= 0

for (index; index <limite_superior; limite_inferior){
    index ++
    if (index % 2=== 0){
        console.log(index)
    }
}