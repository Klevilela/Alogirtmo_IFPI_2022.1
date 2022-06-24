def main():
    a,b,c = map(int, input().split())

    maior_ab = (a+b+abs(a-b)) / 2
    maior_c = int((maior_ab + c + abs(maior_ab - c)) / 2)

    print(maior_c ,'eh o maior')    

main()