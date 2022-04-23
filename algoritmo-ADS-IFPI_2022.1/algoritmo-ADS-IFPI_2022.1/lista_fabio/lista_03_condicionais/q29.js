import { input } from "../../io_utils.js";

const numero = input('Número: ')

const p1 = numero[0] + numero[1]
const p2 = numero[2] + numero[3]

const dezena_1 = Number(p1)
const dezena_2 = Number(p2)

const numero_completo = Number(numero)

const soma_das_dezenas = Number(dezena_1 + dezena_2)

const raiz_do_numero = Math.sqrt(numero_completo)

if (soma_das_dezenas === raiz_do_numero){
    console.log('É um quadrado perfeito')
}else{
    console.log('Não é um quadrado perfeito')
}

console.log(raiz_do_numero)