// Declaração de funções

// Forma Tradicional (hoisting-> pode chamar antes de declarar)
falaOi();
console.log('----------------------');

function falaOi() { 
    console.log('Oi');
}

falaOi(); // Chamada da função

// First-class objects (Objetos de primeira classe) -> Pode tratar funções como dados

const souUmDado =  function() {
    console.log('Sou um dado');
}
souUmDado();
// agora pode usar essa  variavel como parametro de outra função, e fazer essa outra função executar a função "souUmDado"
console.log('----------------------');

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

console.log('----------------------'); 

// Arrow Function 

const fucaoArrow = () => {  
    console.log('Sou uma arrow function');
}

const obj = {
    falar: function() {
        console.log('Estou falando');
    }
}

obj.falar();


const funcaoArrow2 = () => console.log('Sou uma arrow function resumida');

funcaoArrow2();