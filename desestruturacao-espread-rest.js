// Destreuturação de objetos

const pessoa = {
    name: 'Ana',
    idade: 28,
    cidade: 'São Paulo',
    estadoCivil: 'casado'
};

// Acessando os valores com desestruturação
const { name, idade, cidade } = pessoa  

// Atribuindo novos nomes de variáveis (apelidos)
const { name: nomeCompleto, idade: anosDeVida } = pessoa 

// Definir um valor padrão para uma variavél caso a propiedade não exista no objeto
const { estadoCivil, profissao ='Não informada' } = pessoa

// Desestruturação de objetos aninhados
const usuario = {
    id: 123,
    info: {
        email: 'joao@email.com',
        telefone: '11987654321'
    }
};

const { id, info: { email } } = usuario


// Desestruturação de arrays 
// Funciona de maneira semelhante, mas a atribuição é baseada na posição indice 
// dos elementos.

// Sintaxe básica
const cores = ['vermelhno', 'verde', 'azul'];

const [ c1, c2, c3 ] = cores

// Ignorando elementos 
const numeros = [ 10, 20, 30.40 ] 

const [ n1, , n2] = numeros

// Operador rest (...)
const [ a, b, ...resto] = [1, 2, 3, 4, 5]

// Saída: 
console.log(a) // => 1
console.log(b) //=> 2
console.log(resto) // => [3, 4, 5]

// Valores padrão
const [x, y, z=0] = [12, 20]

console.log(z) // => 0

// Desestruturação em parâmetros de objeto
// Especialmente ao lidar com objetos de configuração 

// Desestruturando parâmetros de objetos:
// Em vez de passar um objeto inteiro e acessar um objeto interiro e acessar
// suas propiedades dentro da função, pode-se desestrutura-lo 
// diretamente na assinatura da função

function exixbirInfo ({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`)
}

const user = { nome: 'Carlos', idade: 35}
exixbirInfo(user)

// Definindo valores padrão 
function criarElemento({ tipo = 'div', classe = 'container' }) {
    console.log(`Criando um elemento <${tipo}> com a classe "${classe}".`);
}

criarElemento({tipo: 'p'}) // Criando um elemento <p> com a classe "container".
criarElemento({}) // Criando um elemento <div> com a classe "container".

// Desestruturando parâmetros de array
function somaPrimeiros([primeiro, segundo]){
    return primeiro + segundo
}

const valores = [5, 10, 15]
console.log(somaPrimeiros(valores)); // 15


// Spread/rest (...)

// spread (Espalhar)
// Usado para espalhar ou expandir os elementos de um interavél (array, string e objetos)
// em locais onde múltiplos elementos ou argumentos são esperados

// spread + arrays
// Combinar arrays é a forma moderna e mais legível de concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2]; // Espalha elementos de array1 e array2 

console.log(combinado); //[1, 2, 3, 4, 5, 6]

// Copiar arrays (cópia rasa)
const original = ['a', 'b', 'c']
const copia = [...original]

copia.push('d')
console.log(original); // ['a', 'b', 'c'] (não foi modificado)
console.log(copia);    // ['a', 'b', 'c', 'd']

// Adiciona elementos a um array (imutabilidade)
const numbers = [1, 2, 3];
const novosNumeros = [0, ...numbers, 4]

console.log(novosNumeros); // [0, 1, 2, 3, 4]



// Em objetos 
// Cobinar objetos
const obj1 = {nome: 'Maria', idade: 30}
const obj2 = {idade: 31, cidade: 'Lisboa'}  // A propriedade 'idade' do obj2 sobrescreve a do obj1
const combinados = { ...obj1, ...obj2}

console.log(combinado); // { nome: 'Maria', idade: 31, cidade: 'Lisboa' }

// Em funções
// Passar elementos de um array como argumentos de função 
function somar(a, b, c) {
    return a + b + c
}

const values = [ 10, 20, 30]
const resultado = somar(...valores)

console.log(resultado); // 60

// Rest (juntar)
// É usado para na declaração de uma função para passar múltiplos 
// O parâmetro rest é usado sempre por último na lista

function somarTudo(...numeros) {
    return numeros.reduce((total, num) => total + num, 0)
}

console.log(somarTudo(1, 2));             // 3
console.log(somarTudo(10, 20, 30, 40));   // 100
console.log(somarTudo(5));                // 5


// Combinar parâmetros normais comr rest
function registrarConvidados(organizador, ...convidados) {
    console.log(`Organizador: ${organizador}`);
    console.log('Convidados:', convidados); // 'convidados' é um array
}

registrarConvidados('Ana', 'Carlos', 'Beatriz', 'Daniel')
// Saída:
// Organizador: Ana
// Convidados: [ 'Carlos', 'Beatriz', 'Daniel' ]