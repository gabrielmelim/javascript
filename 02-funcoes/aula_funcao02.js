function escreverNome(nome) {
    console.log('meu nome é: ' + nome)
}

function verificarIdade(idade) {
    if (idade >= 17) {
        return console.log('maior de idade')
    } else {
        return console.log('menor de idade')
    }
}


(function main() {
    escreverNome('Gabriel');
    verificarIdade(18)
    escreverNome('Luciana');
    verificarIdade(17)

})();