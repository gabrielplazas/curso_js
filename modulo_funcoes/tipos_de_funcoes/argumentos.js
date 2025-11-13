// a função definida com a palavar "function" tem uma variável especial chamanda "arguments", que sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

funcao(1, 2); 
funcao(1, 2, 3);



function funcao2(a, b, c, d, e, f){
console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

function funcao3(a, b = 3, c = 5){
  
//function funcao3(a, b = 0){

 //ou   

    // if (b === undefined){
    //     b = 0;
    // } 
    // console.log(a + b); 

   //OU 

    // b = b || 0; // se b for falso, atribui 0
    console.log(a + b + c);
}

funcao3(4);
funcao3(4, 10);
funcao3(5, 5, 20); //pula o segundo argumento
funcao3(5, '', 20); //pula o segundo argumento, mas como string vazia é um valor falso, o valor 0 não é atribuído   
funcao3(5, 0, 20); //pula o segundo argumento, e como é undefined, o valor 0 é atribuído
funcao3(5, undefined, 20); //pula o segundo argumento, e como é undefined, o valor 0 é atribuído

// argumentos que sustentam todos os argumentos enviados
function funcao4([valor1, valor2, valor3 ]){
    console.log(valor1, valor2, valor3);    
}
funcao4(['Gabriel', , 30]);

function conta(operador, acumulador = 0, ...numeros){
         // ... rest operator -> pega o resto dos argumentos e coloca dentro de um array. SEMPRE TEM QUE SER O ÚLTIMO ARGUMENTOs
         console.log(operador, acumulador, numeros);
         for(let numero of numeros){
            // console.log(numero);
            if (operador === '+') acumulador += numero;
            if (operador === '-') acumulador -= numero;
            if (operador === '*') acumulador *= numero;
            if (operador === '/') acumulador /= numero; 
         }
    console.log(acumulador);
}

conta('+', 20, 30, 40, 50);
conta('*', 20, 30, 40, 50);
conta('-', 20, 30, 40, 50);
conta('/', 100000, 20, 2, 5);

// console.log('----------CONTAS------------');
// conta('+', 0, 20, 30, 40, 50);
// conta('*', 1, 20, 30, 40, 50);
// conta('-', 1000, 20, 30, 40, 50);
// conta('/', 100000, 20, 2, 5);