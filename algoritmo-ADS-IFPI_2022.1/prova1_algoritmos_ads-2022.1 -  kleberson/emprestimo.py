renda_mensal = float(input('Informe o valor da sua renda mensal: '))
valor_emprestimo = float(input('Informe o valor do emprestimo: '))
prazo = int(input('Informe o prazo em meses: '))

selic = 0.1275
prazo_em_dias =  prazo * 30
nova_selic = 0 

iof = round((valor_emprestimo * 0.0038) + (0.0082 * prazo_em_dias), 2)

taxa_juros = ((valor_emprestimo * nova_selic * iof)  / 100)
juros = valor_emprestimo + taxa_juros

valor_final = valor_emprestimo + juros
valor_maximo_parcela = renda_mensal * 0.4
parcela_mensal = valor_final / prazo

def emprestimo_aprovado():
    if renda_mensal >= valor_maximo_parcela:
        print('Empréstimo aprovado')
    else:
        print('Empréstimo negado\nNão é permitido parcelar mais do que 24x')

if prazo <= 6 and valor_maximo_parcela < renda_mensal:

    nova_selic += (selic * 0.75) * 100
    taxa_juros = (valor_emprestimo * nova_selic + iof) / 100
    valor_final = valor_emprestimo + taxa_juros

    parcela_mensal = valor_final / prazo

    print('\nValor do IOF: {:.2f} R$'.format(iof))
    print('Valor do juros a pagar: {:.2f} R$'.format(taxa_juros))
    print('Valor total a pagar: {:.2f} R$'.format(valor_final))
    print('Valor da parcela mensal: {}x de {:.2f} R$'.format(prazo, parcela_mensal))
    emprestimo_aprovado()

if prazo >=7 and prazo <= 12 and valor_maximo_parcela < renda_mensal and emprestimo_aprovado():

    nova_selic += (selic * 0.75) * 100
    taxa_juros = (valor_emprestimo * nova_selic + iof) / 100
    valor_final = valor_emprestimo + taxa_juros

    parcela_mensal = valor_final / prazo

    print('\nValor do IOF: {:.2f} R$'.format(iof))
    print('Valor do juros a pagar: {:.2f} R$'.format(taxa_juros))
    print('Valor total a pagar: {:.2f} R$'.format(valor_final))
    print('Valor da parcela mensal: {}x de {:.2f} R$'.format(prazo, parcela_mensal))
    emprestimo_aprovado()

if prazo >=12 and prazo <= 18 and valor_maximo_parcela < renda_mensal:
    
    nova_selic += (selic * 0.75) * 100
    taxa_juros = (valor_emprestimo * nova_selic + iof) / 100
    valor_final = valor_emprestimo + taxa_juros

    parcela_mensal = valor_final / prazo

    print('\nValor do IOF: {:.2f} R$'.format(iof))
    print('Valor do juros a pagar: {:.2f} R$'.format(taxa_juros))
    print('Valor total a pagar: {:.2f} R$'.format(valor_final))
    print('Valor da parcela mensal: {}x de {:.2f} R$'.format(prazo, parcela_mensal))
    emprestimo_aprovado()

if prazo >= 18 and prazo <= 24 and valor_maximo_parcela < renda_mensal:
    
    nova_selic += (selic * 0.75) * 100
    taxa_juros = (valor_emprestimo * nova_selic + iof) / 100
    valor_final = valor_emprestimo + taxa_juros

    parcela_mensal = valor_final / prazo

    print('\nValor do IOF: {:.2f} R$'.format(iof))
    print('Valor do juros a pagar: {:.2f} R$'.format(taxa_juros))
    print('Valor total a pagar: {:.2f} R$'.format(valor_final))
    print('Valor da parcela mensal: {}x de {:.2f} R$'.format(prazo, parcela_mensal))
    emprestimo_aprovado()

print(round(iof, 2), nova_selic, juros)

