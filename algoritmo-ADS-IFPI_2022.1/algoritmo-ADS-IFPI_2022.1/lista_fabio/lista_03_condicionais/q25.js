/*Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234.
O algoritmo deve escrever uma mensagem de permissão de acessp ou não*/

import { input } from "../../io_utils.js";

function main(){
    const senha = input('Senha: ')

    if(verifica_senha(senha)){
        console.log(verifica_senha(senha))
    }
    else{
        console.log('Senha inválida')
    }

    function verifica_senha(s){
        if(s === '1234'){
            return 'Acesso permitido'
        }
    }
}
main()