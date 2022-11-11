/*

3)Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

*/



function main() {
    const nomes = ['vinicius', 'gabriel', 'vitoria', 'vanessa', 'leonardo', 'luciana'];

    for (let i = 0; i < nomes.length; i++) {
        const nome = nomes[i];

        if (nome.charAt(0) == 'v') {
            console.log(nome);
        }

    }
};

main();