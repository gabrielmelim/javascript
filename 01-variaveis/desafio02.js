/* faça um programa para calcular o valor de uma viagem.

Você terá  5 variaveis. sendo elas:
1 - preço total do etanol;
2 - preço da gasolina;
3 - tipo do combustivel que está em seu carro
4 - gasto médio de combustivel do carro por km
5 - distancia em km da viagem 

imprima no console o valor que será gasto para relizar a viagem.

*/

const precoEtanol = 4.79;
const precoGasolina = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


