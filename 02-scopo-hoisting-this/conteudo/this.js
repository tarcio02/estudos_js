// this no contexto global

console.log(this)
// refere-se ao objeto window ou no caso do node.js o ambiente de servidor

// this com estrict mode 

'use strict'

    function mostrarThis() {
        console.log(this)
    }

    mostrarThis() // A saída será undefined

    