//fatura = 
import * as fs from 'fs';

const arquivo = fs.read('consumo_familia.txt')

const lines = arquivo.split('/n')

const nome = arquivo[0]
const kw_H = arquivo[1].split('-')
const bandeira = arquivo[2].split('-')


console.log(nome)

const valor_indivudal_kv_w = 0.89
