/*Leia a altura(em m) e peso(em kg), calcule o imc e escreva se a pessoa está com peso normal, obeso ou obesidade mórbida
imc = p / h²
peso_normal = imc == 25
obeso = imc >= 25 e <= 30
obesidade_mórbida = imc > 30*/

import { input } from "../../io_utils.js";

function main(){
    const peso = Number(input('Informe seu peso: '))
    const altura = Number(input('Informe sua altura: '))
    

    if (calcula_imc(peso, altura) < 25){
        console.log(`Peso normal\nIMC: ${calcula_imc(peso, altura)}`)
    }
    if (calcula_imc(peso, altura) > 25 && calcula_imc(peso, altura) <= 30){
        console.log(`Obeso(a)\nIMC: ${calcula_imc(peso, altura)}`)
    }
    if (calcula_imc(peso, altura) > 30){
        console.log(`Obesidade mórbida\nIMC: ${calcula_imc(peso, altura)}`)
    }

    function calcula_imc(p, h){
        const imc = p / (h/100)**2 
        return imc.toFixed(2)
    }
}

main()
