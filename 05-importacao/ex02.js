/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 4

*/
export {
    maiorMenorNumero
};

function maiorMenorNumero(array) {
    const numero = array;
    let maiorNumero = 0;
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] > maiorNumero) {
            maiorNumero = numero[i];
        }
    }
    console.log('maior número: ' + maiorNumero)

    let menorNumero = numero[0];
    for (let i = 0; i < numero.length; i++) {

        if ( numero[i] < menorNumero) {
            menorNumero = numero[i];
        }
    }

    console.log('menor número: ' + menorNumero)

}

