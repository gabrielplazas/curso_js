// arrays/script.js
const alunos = ['gabriel', 'jp', 'ana', 'maria', 'joão'];
console.log(alunos);
console.log(alunos[0]);
alunos[5]='carol';
alunos[6]='pedro';

console.log(alunos);
console.log(alunos.length);
console.log("----------");   
// push = adicionar um valor no final do array
alunos.push('camila');
console.log(alunos);    
console.log("----------");
alunos.unshift('paulo 56 '); // adicionar no começo do array
console.log(alunos);