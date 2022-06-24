def main():
    a,b,c = map(float, input().split())
    pi = 3.14159

    #area triangulo, a = base; c = altura
    area_triangulo_retangulo = (a * c) / 2

    #area do circulo; c = raio; pi =3.14159
    area_circulo_de_raio = pi * (c ** 2)

    #area_trapezio; a, b = base; c = altura
    area_trapezio = (a + b) * c / 2

    #area_quadrado; b = lado
    area_quadrado = b ** 2

    #area do retângulo; a, b = lados
    area_retangulo = b * a

    print('TRIANGULO: {:.3f}'.format(area_triangulo_retangulo))
    print('CIRCULO: {:.3f}'.format(area_circulo_de_raio))
    print('TRAPEZIO: {:.3f}'.format(area_trapezio))
    print('QUADRADO: {:.3f}'.format(area_quadrado))
    print('RETANGULO: {:.3f}'.format(area_retangulo))

main()