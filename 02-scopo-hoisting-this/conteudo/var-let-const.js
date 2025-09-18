// var
// Uma variavél do tipo var, é uma variavél de scopo, quando declarada dentro de uma função
// ela se torna acessivél emm qualquer lugar dessa função.
// Além disso ela tem um comportamento chamada de hoisting, ou seja quando o código é compilado a declaração dela sobre para o topo 
// do escopo de função, porém só a declaração é elevada e não a sua atribuição.

// Sua caracteristicas são:
// * pode  ser redeclarada
// * pode ser reatribuída
// * hoisting sim, com inicialização undefined

function exemploComVar() {
    if (true) {
        var x = 10;
        console.log(x); // Saída: 10
    }
  console.log(x); // Saída: 10 (acessível fora do bloco if)
}


// let
// Essa variavél só é acessivel dentro bloco de função em que ela foi declarada, seja if, for ou while.
// Caracteristicas: 
// *pode ser redeclarada fora do bloco konde foi criada
// *pode ser reatribuída
// *também se comporta como hoisting, mas com "Temporal Dead Zone"

function exemploComLet() {
    if (true) {
        let y = 20;
        console.log(y); // Saída: 20
    }
    // console.log(y); // Geraria um ReferenceError: y is not defined
}

// conts 
// Sua princípal função é que uma vez que seu valor é atribuído não pode ser novamente reatribuido
// è importante ressaltar que que a imutabilidade se refere a atribuição da variavél em si, e não o valor que ela contém 
// . Se uma const armazena um objeto ou um array, as propriedades desse objeto ou os elementos desse array podem ser modificados.

// Caracteristicas: 
// Escopo: de Bloco.
// Pode ser re-declarada: Não, no mesmo escopo.
// Pode ser re-atribuída: Não.
// Hoisting: Sim, mas com "Temporal Dead Zone".
// Inicialização: Deve ser inicializada no momento da declaração.

const PI = 3.14159;
// PI = 3; // Geraria um TypeError: Assignment to constant variable.

const pessoa = {
    nome: "João"
};

pessoa.nome = "Maria"; // Isso é permitido
console.log(pessoa.nome); // Saída: Maria

// pessoa = { nome: "Carlos" }; // Geraria um TypeError, pois está tentando re-atribuir a constante.