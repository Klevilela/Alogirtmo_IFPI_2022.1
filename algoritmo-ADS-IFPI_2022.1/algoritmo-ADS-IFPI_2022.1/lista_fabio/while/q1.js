/*Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus
divisores. (flag número = 0).*/
import prompt from 'prompt-sync'
const input = prompt()

let numero = Number(input('Número: '))

//console.log(`Número: ${numero}\nRelação de divisores: ${numero}, ${eh_divisor(numero, anterior)}`)

//let anterior
let divisor = 2 
//let divisores = 0
//let anterior 
while (numero > 0) {
    numero = Number(input('Número: '))

    if (eh_divisor_par(numero)){
        
        console.log(eh_divisor_par(numero)) 
    }
    
}


function eh_divisor_par(n){
    //let resto_divisao = n % divisor
    while (n % 2 !== 0){
        divisor += 1
    }
    if (n % divisor === 0){
        n = divisor
    }
    console.log(n, divisor)
     
}