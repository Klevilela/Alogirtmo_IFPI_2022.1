def main():
    distancia_percorrida = int(input())
    total_combustivel_gasto = float(input())

    consumo_medio = distancia_percorrida / total_combustivel_gasto

    print('{:.3f} km/l'.format(consumo_medio))

main()