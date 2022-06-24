def main():
    peca_1 = input().split()
    peca_2 = input().split()

    codigo_peca_1 = int(peca_1[0])
    num_pecas_1 = int(peca_1[1])
    valor_unitario_peca_1 = float(peca_1[2])
    
    codigo_peca_2 = int(peca_2[0])
    num_pecas_2 = int(peca_2[1])
    valor_unitario_peca_2 = float(peca_2[2])

    total_a_pagar_peca_1 = num_pecas_1 * valor_unitario_peca_1
    total_a_pagar_peca_2 = num_pecas_2 * valor_unitario_peca_2

    total = total_a_pagar_peca_1 + total_a_pagar_peca_2

    print('VALOR A PAGAR: R$ {:.2f}'.format(total))

main()