/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

export {
numeroPar,
}

function numeroPar(array) {
    const listas = array;
  
    for (let i = 0; i < listas.length; i++) {
        const lista = listas[i];

        if(lista %2 == 0){
             console.log(lista);
        } 
    }
}