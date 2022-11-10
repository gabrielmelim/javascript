/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let precoEtiqueta = 100;
let precoFinal = 0;
let desconto = 0;
let juros = 0;
let formaPagamento = 4;

if (formaPagamento === 1) {

    desconto = precoEtiqueta * 0.1
    precoFinal += precoEtiqueta - desconto
    console.log('Forma de pagamento avista no débito selecionada');
    console.log('Valor total da mercadoria: ' + precoEtiqueta);
    console.log('cupom de 10% de desconto sendo gerado.... \nvalor do deseconto: ' + desconto);
    console.log('********************************************')
    console.log('Valor total pago da  mercadoria: ' + precoFinal);

} else if (formaPagamento === 2) {
    desconto = precoEtiqueta * 0.15
    precoFinal += precoEtiqueta - desconto
    console.log('Forma de pagamento avista no dinheiro ou pix selecionada');
    console.log('Valor total da mercadoria: ' + precoEtiqueta);
    console.log('cupom de 10% de desconto sendo gerado.... \nvalor do deseconto: ' + desconto);
    console.log('********************************************')
    console.log('Valor total pago da  mercadoria: ' + precoFinal);
} else if (formaPagamento === 3) {

    console.log('Forma de pagamento parcelada até 2x sem juros');
    console.log('Valor total da mercadoria: ' + precoEtiqueta);
    console.log('Valor total pago da  mercadoria: ' + precoEtiqueta);
} else {
    juros = precoEtiqueta * 0.1
    precoFinal += precoEtiqueta + juros
    console.log('Forma de pagamento parcelada acima de 2x');
    console.log('Valor total da mercadoria: ' + precoEtiqueta);
    console.log('juros de 10% em cima do produto.... \nvalor do juros: ' + juros);
    console.log('********************************************')
    console.log('Valor total pago da  mercadoria: ' + precoFinal);
}