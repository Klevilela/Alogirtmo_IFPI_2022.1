/*leia 5 números calcule a sua media e escreva os que são maiores que a média */
function media(n1, n2, n3, n4, n5) {
    const calcular_media = n1 + n2 + n3 + n4 + n5 / 5

    const maior_n1 = n1
    const maior_n2 = n2
    const maior_n3 = n3
    const maior_n4 = n4
    const maior_n5 = n5

    if (n1 && n2 && n3 && n4 && n5 > calcular_media) {
        console.log(`Números: ${maior_n1, maior_n2, maior_n3, maior_n4, maior_n5} são maiores que a média. \nE a média é ${calcular_media}`)
    }
    if (n1 > calcular_media && n2 && n3 && n4 && n5 < calcular_media) {
        console.log(`Número ${maior_n1} é maior que a média. \nE a média é ${calcular_media}`)
    }
    if (n2 > calcular_media && n1 && n3 && n4 && n5 < calcular_media) {
        console.log(`Número ${maior_n2} é maior que a média. \nE a média é ${calcular_media}`)
    }
    if (n3 > calcular_media && n1 && n2 && n4 && n5 < calcular_media) {
        console.log(`Número ${maior_n3} é maior que a média e a média é ${calcular_media}`)
    }
    if (n4 > calcular_media && n1 < calcular_media || n2 < calcular_media || n3 < calcular_media && n5 < calcular_media) {
        console.log(`Número ${maior_n4} é maior que a média e a média é ${calcular_media}`)
    }
    if (n5 > calcular_media && n1 < calcular_media || n2 < calcular_media || n3 < calcular_media || n4 < calcular_media) {
        console.log(`Número ${maior_n5} é maior que a média e a média é ${calcular_media}`)
    }
}

media(8, 5, 7, 4, 3)
media(2, 2, 3, 4, 5)


//usando 8 + 6 + 4 + 8 + 5. a média é igual a 25 e o numero acima da media é 8 === n1