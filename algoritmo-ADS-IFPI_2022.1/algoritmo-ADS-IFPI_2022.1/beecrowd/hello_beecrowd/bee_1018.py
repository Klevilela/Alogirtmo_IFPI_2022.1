def main():
    
    valor = int(input())
    print(valor)

    notas_de_100 = valor // 100
    resto = valor % 100

    notas_de_50 = resto // 50
    resto = resto % 50

    notas_de_20 = resto // 20
    resto = resto % 20

    notas_de_10 = resto // 10
    resto = resto % 10

    notas_de_5 = resto // 5
    resto = resto % 5

    notas_de_2 = resto // 2
    notas_de_1 = resto % 2

    print('{} nota(s) de R$ 100,00'.format(notas_de_100))
    print('{} nota(s) de R$ 50,00'.format(notas_de_50))
    print('{} nota(s) de R$ 20,00'.format(notas_de_20))
    print('{} nota(s) de R$ 10,00'.format(notas_de_10))
    print('{} nota(s) de R$ 5,00'.format(notas_de_5))
    print('{} nota(s) de R$ 2,00'.format(notas_de_2))
    print('{} nota(s) de R$ 1,00'.format(notas_de_1))

main()