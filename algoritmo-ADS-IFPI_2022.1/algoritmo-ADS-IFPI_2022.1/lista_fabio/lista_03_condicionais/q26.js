/*Leia 3 lados de um triângulo e identifique sua hipotenusa e seus catetos*/

import { input } from "../../io_utils.js";

function main(){
    const lado_a = Number(input('Informe o valor do lado A: '))
    const lado_b = Number(input('Informe o valor do lado B: '))
    const lado_c = Number(input('Informe o valor do lado C: '))

    if (lado_a > lado_b && lado_a > lado_c){
        console.log(`O lado A é a hipotenusa e os lados B e C são os catetos`)
    }
    if (lado_b > lado_a && lado_b > lado_c){
        console.log(`O lado B é a hipotenusa e os lados A e C são os catetos`)
    }
    if (lado_c > lado_a && lado_c > lado_b){
        console.log(`O lado C é a hipotenusa e os lados A e B são os catetos`)
    }




}

main()