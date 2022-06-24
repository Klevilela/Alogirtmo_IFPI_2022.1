def main():
    a,b,c = map(float, input().split())

    delta = b*b - 4 * a * c

    if delta < 0 or a == 0:
        print('Impossivel calcular')
    else:
        r1 = (-b + (delta ** (1/2))) / (2*a)
        r2 = (-b - (delta ** (1/2))) / (2*a)
        print('R1 = {:.5f}'.format(r1))
        print('R2 = {:.5f}'.format(r2))

main()

'''def bhaskara_2(v1, v2, v3):

    delta = v1**2 - (4 * v1 * v3)
    raiz_de_delta = delta ** 0.5

    

    if delta < 0 or v1 == 0:
        return 'Impossível calcular'
    else:    
        return 'R2 = {r2:.5f}'


#assert bhaskara1(10.0, 20.1, 5.1) == -0.29788
#print('passou')

#assert delta(10.0, 20.1, 5.1) == 200.01
#print('passou')
print(delta(10.0, 20.1, 5.1))
print(bhaskara1(10.0, 20.1, 5.1))
print(bhaskara2(10.0, 20.1, 5.1))

print(bhaskara1(0.0, 20.0, 5.0))'''

