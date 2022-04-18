/*Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)*/

import {print, input} from '../io_utils.js'

const vel_ms = Number(input('Digte a velocidade: '))

const vel_km = vel_ms * 3.6
print(`A velocidade em Km/H é ${vel_km}`)
