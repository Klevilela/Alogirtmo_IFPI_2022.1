def main():
    tempo_gasto_viagem = int(input())
    velocidade_media = int(input())

    distancia = velocidade_media * tempo_gasto_viagem

    qtd_litros_gastos = distancia / 12

    print('{:.3f}'.format(qtd_litros_gastos))

main()