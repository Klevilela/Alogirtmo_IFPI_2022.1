def main():
    tempo_segundos = int(input())

    hora = tempo_segundos // (3600)
    segundos = tempo_segundos % (3600)

    minutos = segundos // 60
    segundos = tempo_segundos % 60
    

    print('{}:{}:{}'.format(hora, minutos, segundos))

main()