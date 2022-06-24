
'''Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

Entrada         Saída
25.01           Intervalo [25, 50]
25.00           Intervalo [0, 25]
100.00          Intervalo [75, 100]
-25.02          Fora do intervalo

O arquivo de entrada contém um número com ponto flutuante qualquer.'''

def main():

    valor = float(input())

    if valor < 0 or valor > 100:
        print('Fora de intervalo')

    elif  valor <= 25:
        print('Intervalo [0,25]')

    elif valor <= 50:
        print('Intervalo (25,50]')

    elif valor <= 75:
        print('Intervalo (50,75]')
    
    else:
        print('Intervalo (75,100]')
    
main()