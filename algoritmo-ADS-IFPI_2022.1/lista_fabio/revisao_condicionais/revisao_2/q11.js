/*leia um número <1000 e imprima as centenas, dezenas e unidades. Observando os termos no plural a colocação do 'e'
da vírgula entre outros
ex: 326 = 3 centenas, 2 dezenas e três unidades*/
import prompt from 'prompt-sync'
const input = prompt()


function main(){
    const numero = input('Informe o valor do número, sendo ele menor que 1000: ')
    
    const centena = Number(numero[0])
    const dezena = Number(numero[1])
    const unidade = Number(numero[2])

    const valor_em_frase = valor_por_extenso(centena, dezena, unidade)

    function valor_por_extenso(c, d, u){
        return `${c} centena(s), ${d} dezena(s) e ${u} unidade(s)`
    }

    console.log(valor_em_frase)
}

main()