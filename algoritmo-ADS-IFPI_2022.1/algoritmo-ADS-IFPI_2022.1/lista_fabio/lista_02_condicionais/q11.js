/*leia três números e escreva o valor de n1 se opcao for igual a 1, o de n2 se a opção for =2, e n3 se for =3*/

function eh_igual(n1, n2, n3) {
    if (n1 === 1 && n2 === 2 && n3 === 3) {
        console.log(n1, n2, n3)
            //console.log(n2)
            //console.log(n3)
    }
    if (n1 === 1 && n2 != 2 && n3 != 3) {
        console.log(n1)
    }
    if (n2 === 2 && n1 != 1 && n3 != 3) {
        console.log(n2)
    }
    if (n3 === 3 && n1 != 1 && n2 != 2) {
        console.log(n3)
    }
}


eh_igual(1, 2, 3)
eh_igual(1, 3, 4)
eh_igual(2, 8, 3)
eh_igual(4, 2, 5)