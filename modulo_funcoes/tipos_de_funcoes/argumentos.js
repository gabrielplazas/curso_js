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