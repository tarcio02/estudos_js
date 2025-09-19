// this no contexto global

console.log(this)
// refere-se ao objeto window ou no caso do node.js o ambiente de servidor

// this com estrict mode 

'use strict'

    function mostrarThis() {
        console.log(this)
    }

    mostrarThis() // A saída será undefined


// this em objetos

const Pessoa = {
    nome: 'Tárcio',
    sobrenome: 'Teixeira',
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome
    }
}

console.log(Pessoa.nomeCompleto()) // Saída: "Tárcio Teixeira"
// Nesse caso o this está sendo usado dentro do método de um objeto, então
// ele irá se referir ao própio objeto no qual ele pertence.



// Invocacão direta vs. Invocação como método

const PessoaSaudacao = {
    nome: "Carlos", 
    saudacao: function() {
        console.log("Olá, " + this.nome)
    }
}


PessoaSaudacao.saudacao() // Saída: "Olá, Carlos" (this é o objeto pessoa)

const funcaoSaudacao =  PessoaSaudacao.saudacao
funcaoSaudacao() // Sa´pida: "Olá, undefined" (em modo não estrito)

// No segundo chamado, a função é invocada como uma função comum, 
// Não como um método de pessoa, então o this perde a referência do objeto 
// PessoaSaudacao, e em navegadores em modo não estrito, aponta para o objeto 
// global (window) que não tem a propiedade nome


// Para controlar o valor de this aponte para o objeto correto, idependente de como 
// a função é chamada, você pode usar métodos como bind(), call() e apply()