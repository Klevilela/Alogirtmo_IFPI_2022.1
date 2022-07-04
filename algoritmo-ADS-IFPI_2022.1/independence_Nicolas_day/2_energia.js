//fatura =

import {readfileSync} from 'fs'

const arquivo = readfileSync('consumo_familia.txt', 'utf-8').split('\n')

const lines = arquivo.split('/n')

const nome = arquivo[0]
const kw_H = arquivo[1].split('-')
const bandeira = arquivo[2].split('-')


console.log(lines)

const valor_indivudal_kv_w = 0.89

if (kw_H >= 240){
    
}