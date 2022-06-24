def main():
    codigo_item, quantidade = map(int, input().split())

    soma = 0

    if codigo_item == 1:
        soma = 4 * quantidade
        print('Total: R$ {:.2f}'.format(soma))
    
    if codigo_item == 2:
        soma = 4.5 * quantidade
        print('Total: R$ {:.2f}'.format(soma))
    
    if codigo_item == 3:
        soma = 5 * quantidade
        print('Total: R$ {:.2f}'.format(soma))
    
    if codigo_item == 4:
        soma = 2 * quantidade
        print('Total: R$ {:.2f}'.format(soma))
    
    if codigo_item == 5:
        soma = 1.5 * quantidade
        print('Total: R$ {:.2f}'.format(soma))

main()

