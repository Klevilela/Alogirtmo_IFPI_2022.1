def main():
    nome_funcionario = input()
    salario_fixo = float(input())
    total_vendas_mes = float(input())

    salario_bonus = salario_fixo + (total_vendas_mes * 0.15)

    print('TOTAL = R$ {:.2f}'.format(salario_bonus))

main()