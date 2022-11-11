/*

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

*/



function main() {
    const lista = [];

    for (let i = 0; i < 50; i++) {
        const newlist = lista.push(i);
        if(newlist >=10 && newlist <=50){
            if(newlist %2 === 0){
                console.log(newlist)
            }
        }

    }

}

main();