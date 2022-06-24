def main():
    num_funcionario = int(input())
    horas_trabalhadas = int(input())
    valor_hora_trabalhada = float(input())

    salario = horas_trabalhadas * valor_hora_trabalhada

    print('NUMBER = {}'.format(num_funcionario))
    print('SALARY = U$ {:.2f}'.format(salario))

main()