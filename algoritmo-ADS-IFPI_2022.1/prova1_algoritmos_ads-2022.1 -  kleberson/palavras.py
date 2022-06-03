frase = input('Digite a frase: ').split(' ')

qtd_caracteres_min = 10
qtd_caracteres_max = 30

contador_de_palavras = 0
tamanho = len(frase)

for i in frase:
    if tamanho < qtd_caracteres_min and tamanho > qtd_caracteres_max:
        print('Frase de tamanho inferior a 8 ou superior a 180')
        frase = input('Digite a frase: ').split(' ')
    else:
        contador_de_palavras += 1
    
    
print('A frase contém {} palavras'.format(contador_de_palavras))

print(tamanho)

#frase = le ciel est bleu
#quantidade de palavras = 4