def main():

    x, y = map(float, input().split())

    if x == 0 and  y == 0:
        print('Origem')

    #q1
    elif x > 0 and y > 0:
        print('Q1')

    #q2
    elif x < 0 and y > 0:
        print('Q2')

    #q3
    elif x < 0 and y < 0:
        print('Q3')

    #q4
    elif x > 0 and y < 0:
        print('Q4')

    elif x == 0 and y > 0 or y < 0:
        print('Eixo Y')

    elif y == 0 and x > 0 or x < 0:
        print('Eixo X')

main()
