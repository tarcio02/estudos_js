// Manipulação de objetos
const users = {
    firstName: 'Tárcio',
    lastName: 'Teixeira',
    age: 23,
    formacao: {
        sueprior: true,
        medio: true,
    },
}

// Adicionando propiedades a um objeto (utíl paranomes dinâmicos e caracteres especiais)
// Notação de ponto
users.profissao = "Desenvolvedor"

// Usando notação de colchetes
users["cidade-natal"] = "Livramento de ns."

// Lendo propiedades de um objeto (da mesma forma que se adiciona novas propiedades)
// Notação de ponto e colchetes]

console.log(users.profissao) 
console.log(users["cidade-natal"])


// Atualizar
// Basta apenas atribuit um valor a uma propiedade existente
users.age = 24

// Deletar uma propiedade (delete)
delete users.lastName

// Interando sobre as propiedades de um objeto
// A) Laço for...in 
for (let chave in users) {
    console.log(chave + ": " + users.chave)
}
// Aqui você intera por todas as chaves do objeto

// B) Object.keys(), Object.values(), Object.entries()
const chaves = Object.keys(users) // Retorna um array com o nome das propiedades 
// Retorno ["firstName", "lastName", "age"]

const valores = Object.values(users) // Retorna um array com os valores das propiedades 
// Retorno ["Tárcio", "Teixeira", "23"]

const entradas = Object.entries(users) // Retorna um array de arrays, onde cada subarray contém a chave e valor
// Retorno [["firstName", "Tárcio"], ["lastName", "Teixeira"], ["age", "23"]]



// Clonagem de objetos

// Object.assign()
const userClone = Object.assign({}, users)

// Dentro das chave {} podemos adiconar ou alterar propiedas do objeto clone
// sem alterar a estrutura do objeto principal

userClone = Object.assign({address: "my address"}, users) // adicona uma nova propiedade ao objeto clonado

userClone = Object.assign({age: 41}, users) // altera o valor de uma propiedade já existente

// Mesclagem de objetos
const objA = { nome: "Carlos", idade: 40 };
const objB = { idade: 41, profissao: "Engenheiro" };

const objMesclado = Object.assign({}, objA, objB)


// spread
const userClone2 = {...users}

userClone2.age = 41
// Quando se usa o spread no clone, pode-se alterar as propiedades dessa forma 
// sem alterar a estrutura do objeto pricipal (users)

userClone2 = {...users, color: "red"}
// Como segundo parâmetro do spread pode se adicinar novas propiedades ao objeto clonado

// Mesclagem de objetos
const objMesclado2 = {...objA, ...objB}


// O que não é o correto:
userClone = users

userClone.age = 41

// Isso modifica o objeto principal (users) pois estão apontando para o mesmo espaço na memória


// Clonagem profunda dos objetos
const cloneProfundo = JSON.parse(JSON.stringify(users))
// Dessa forma ele acaba clonando até o sub objeto do objeto, algo que a clangem rasa realizada antes
// com Object.assign() e spread não fazia.