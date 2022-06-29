/*Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.*/

const valor_emprestimo = 3000
let dias_uteis = 5
let pagamento_diario_emprestimo =  200

while (pagamento_diario_emprestimo * dias_uteis !== valor_emprestimo){
    dias_uteis += 5
}

console.log(`A quantidade de dias úteis para pagar o empréstimo é: ${dias_uteis}`)

