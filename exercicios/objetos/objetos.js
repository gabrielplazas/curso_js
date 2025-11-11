// ----------------------------------//
// [array]
// {Objetos}
// ----------------------------------//

// const Pessoa1 = { 
//     nome: 'Gabriel', 
//     sobrenome: 'Plazas',  
//     idade: 20
// };

// const Pessoa2 = { 
//     nome: 'Raquel', 
//     sobrenome: 'Plazas',  
//     idade: 20
// };

// no exemplo acima, para criar 100 pessoas, teriamos que criar 100 objetos
// Vamos resolver com uma função:

                  // parâmetros  
function criaPessoa(nome, sobrenome, idade) {
    return { 
        nome, 
        sobrenome,
        idade
    };
    
}
                           //argumentos 
const pessoa1 = criaPessoa('Gabriel', 'Plazas', 20);

console.log(pessoa1);
console.log(pessoa1.nome);

const pessoa2 = criaPessoa('Raquel', 'Plazas', 18); 
const pessoa3 = criaPessoa('Ana', 'Silva', 25);
const pessoa4 = criaPessoa('João', 'Souza', 30);
const pessoa5 = criaPessoa('Maria', 'Oliveira', 22);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);


const serHumano = { 
    nome: 'Ricardo',
    sobrenome: 'Silva',
    idade: 40,       

    fala() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    },

    incrementaIdade() {
        this.idade++;
    }   

};

serHumano.fala();
serHumano.incrementaIdade();
serHumano.fala();
serHumano.incrementaIdade();
serHumano.fala();