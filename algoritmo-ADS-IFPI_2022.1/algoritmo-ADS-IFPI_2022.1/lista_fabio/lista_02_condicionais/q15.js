/*Leia a quantidade de horas dadas por dois professores e o valor por hora recebido por cada um.
 Escreva na tela qual dos professores têm salário total maior*/

if (salario_professor1() > salario_professor2()) {
    console.log('O salário do professor 1 é maior que o do professor 2')
} else {
    console.log('O salário do professor 2 é maior que o do professor 1')
}

function salario_professor1(h, vh) {
    const salario = h * vh
    return salario
}


function salario_professor2(h, vh) {
    const salario = h * vh
    return salario
}


salario_professor1(200, 10)
salario_professor2(200, 15)