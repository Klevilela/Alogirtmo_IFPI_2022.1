def main():
    idade_em_dias = int(input())

    ano = idade_em_dias // 365

    resto_ano = idade_em_dias % 365

    meses = resto_ano // 30
    dias = resto_ano % 30

    print('{} ano(s)\n{} mes(es)\n{} dia(s)'.format(ano, meses, dias))

main()