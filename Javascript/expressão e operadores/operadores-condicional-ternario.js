/*
# Operadores condicional (ternario)
- Dependedo da condição, nós recebemos valores diferentes
- Condição entao valor 1 se não valor 2
- Condition ? valor 1 : valor 2
*/
let pao = true
let queijo = true

const coffeeBreak = pao && queijo ? 'Café top' : 'Café ruim'
console.log(coffeeBreak)

let idade = 16
const  digirir = idade >= 18 ? 'pode' : 'não pode'
console.log(digirir)