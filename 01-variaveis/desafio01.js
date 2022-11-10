/* faça um programa para calcular o valor de uma viagem.

Você terá  3 variaveis. sendo elas:

1 - preço do combustivel;
2 - gasto medio do combustivel do carro por km;
3 - distancia em km da viagem;

imprima no console o valor que será gasto para relizar a viagem.

*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
