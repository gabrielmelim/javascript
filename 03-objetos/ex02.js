/*

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'imc: ' + imc + ',' + ' abaixo do peso';
        } else if (imc >= 18.5 && imc <= 25) {
            return 'imc: ' + imc + ',' + ' peso normal';
        } else if (imc >= 25 && imc <= 30) {
            return 'imc: ' + imc + ',' + ' acima do peso';
        } else if (imc >= 30 && imc <= 40) {
            return 'imc: ' + imc + ',' + ' obeso';
        } else {
            return 'imc: ' + imc + ',' + ' obesidade';
        }

    }

}

const gabriel = new Pessoa('gabriel', 49, 1.68);
console.log(gabriel, '\nClassificação do ' + gabriel.classificarImc());

