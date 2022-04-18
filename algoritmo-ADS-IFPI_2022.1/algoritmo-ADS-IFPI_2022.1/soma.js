/* Soma de todos os números entre 1 a 200

const s1 = 200 + 1
const s2  = 200 / 2
const s3 = s1 * s2

console.log(s3)*/

import {print, input} from './io_utils.js';

const inicio = 1
const final = Number(input('Digite o valor: '))

print('Somar de 1 até 200')

const soma = (final + inicio) * (final / 2)
print(`A soma é ${soma}`)