// Criar uma função que receberá uma lista de produtos e retorne 
// 1 - Os produtos com preço acima de R$ 100
// 2 - A Soma total do lista
// 3 - Um novo array com todos os nomes em letras maiúsculas

const carrinho = [
    {
        id:1,
        nome: "café",
        preco: 16.00
    },
    {
        id: 2,
        nome: "leite",
        preco: 8.30
    },
    {
        id: 3,
        nome: "arroz",
        preco: 7.50
    },
    {
        id: 4,
        nome: "cafeteira",
        preco: 120.00
    },
    {
        id: 5,
        nome: "micro-ondas",
        preco: 450.00
    }
]

const filtraCarrinho = (lista) => {
    // Filtra produtos acima de R$ 100.00
    const maiorCem = lista.filter(({ preco }) => {preco > 100})

    // Soma total dos preços
    const total = lista.reduce((acc, { preco }) => acc + preco,  0)

    const maiusculas = lista.map( p => ({
        ...p,
        nome: p.nome.toUpperCase()
    }))

    return {
        maiorCem,
        total,
        maiusculas
    }
}

console.log(filtraCarrinho(carrinho))