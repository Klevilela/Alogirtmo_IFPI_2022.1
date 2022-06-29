/*Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.*/
import prompt from 'prompt-sync'
const input = prompt()

const limite_inferior = Number(input('Limite inferior: '))
const limite_superior = Number(input('Limite superior: '))

let index = 2

for (index; index <limite_superior; limite_inferior){
    index ++
    if (limite_inferior >= 2){
        if (limite_inferior % index !== 0){
            console.log(index)
        }
    }
        
    
}