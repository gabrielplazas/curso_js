// alert("Teste de alerta!");

function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');     

  const pessoas = [];
   
   // form.onsubmit = function (evento) {
    //     evento.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
    //     alert(1);
    //     console.log('Evento disparado');
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
        // console.log('Form não foi enviado');
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');   

        console.log(nome, sobrenome, peso, altura); 

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;

    }
    form.addEventListener('submit', recebeEventoForm); // Quando o evento acontecer, chama a função, qual evento? -> submit 


   
}
meuEscopo();    