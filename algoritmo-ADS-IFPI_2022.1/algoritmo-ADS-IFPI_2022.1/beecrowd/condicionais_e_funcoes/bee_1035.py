'''Leia 4 valores inteiros A, B, C e D.
A seguir, se B for maior do que C e se D for maior do que A,
e a soma de C com D for maior que a soma de A e B
e se C e D, ambos, forem positivos e se a variável A for par
escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".'''

'''def main():
    a,b,c,d = map(int, input().split())

    soma_ab = a + b
    soma_cd = c + d

    if b > c and d > a:
        if soma_cd > soma_ab:
            if  c > 0 and d > 0:
                if a % 2 == 0:
                    print('Valores aceitos')
    else:
        print('Valores nao aceitos')

main()'''

def main():
    a,b,c,d = map(int, input().split())

    soma_ab = a + b
    soma_cd = c + d

    if b > c and d > a and soma_cd > soma_ab and c > 0 and d > 0 and a % 2 == 0:
        print('Valores aceitos')
    else:
        print('Valores nao aceitos')

main()