/*

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maiorNota nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

*/

function main() {

   const lista = [2, 7, 3, 8, 10, 4]
   let maiorNota = 0;
  

   for (let i = 0; i < lista.length; i++) {
      if(lista[i] > maiorNota){
         maiorNota = lista[i];
      } 
   }

console.log(maiorNota)
}

main();