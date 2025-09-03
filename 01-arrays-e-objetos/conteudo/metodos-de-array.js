// Método map
const numbers = [1, 2, 3, 4, 5];

const numbersMap = numbers.map(function(number) {
    return number * 2;
})

// Retona [2, 4, 6, 8, 10]
// ele intera sob todos os elementos e retorna seu valores tratados


// Método filter
const ages = [8, 14, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});

// Retorna [8, 14, 30, 22, 40]
// ele intera sob todos os elementos e retorna os valores 
// que baterem certo com a comparação


// Método reduce 
// aqui vamos continuar utilizando os valores da constante ages
const sumOfAges = ages.reduce(function(age, accumaltor) {
    return accumaltor + age;
}, 0);

// Retorna 140
// pois 140 é asoma total dos valores armazenados em ages 


// Método find
const fruits = [
    {
        nome: 'macã',
        cor: 'vermelha',
    },
    {
        nome: 'banana',
        cor: 'amarela',
    },
    {
        nome: 'limão',
        cor:  'verde',
    },
]

const founfFruit = fruits.find(fruit => fruit.nome === 'banana')

// Retorna o primeiro obejeto que tenha como valor da propiedade nome o texto banana


// Método every 
const turma = [
    {
        aluno: 'joão',
        idade: 16,
    },
    {
        aluno: 'tárcio',
        idade: 15,
    },
    {
        aluno: 'vitor',
        idade: 22,
    },
]

const resultado = turma.every(a => a.idade > 18)

// Retorno do objeto é true ou false, pois ele verifica aquela condição para todos 
// no caso, se apenas um aluno não tiver idade maior que 18
// ele irá retornar false.


//Método some 
// Vamos usar o mesmo o objeto turma, utiizado no exemplo anterior
const ret = turma.some(a => a.idade >= 18)

// Retorno true ou false, se existir pelo menos um objeto 
// que se encaixa nessa condição


// Método flat
const array = [1, 2, 3, [4, 5]]

const novoArray = array.flat()

// Saída = [1, 2, 3, 4, 5, 6]

// Removendo mais camadas do array, caso haja.
const array_de_2camdas = [[[1], [2]], [[3], [4]]]

const arraySemCamadas = array_de_2camdas.flat(2)

// Saída = [1, 2, 3, 4]

// Removendo todas as camadas do array
const arrayInfinity = array_de_2camdas.flat(Infinity)

// Saída = [1, 2, 3, 4]
// O parâmetro infinity reduz todas as camdas do array, serve para quando não se sabe quantas camadas existem


// Método flatMap
const frases = ['Olá eu sou', 'tárcio teixeira']

const novaFrase = frases.flatMap(f => f.split(' '))

// Retorno novaFrase = ['olá', 'eu', 'sou', 'tárcio', 'teixeira']
// Retorno somente com map novaFrase = [['olá', 'eu', 'sou'], ['tárcio', 'teixeira']]
