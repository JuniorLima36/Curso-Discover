/*
# Função
- Funções são blocos de construção fundamentais em JS
- um conjunto de instruções que executa uma tarefa ou calcula um valor
- você deve defini-la em algum lugar no escopo do qual você quiser chamá-la
*/
function soma(number1, number2) {
  return console.log(number1 + number2)
}

soma(2, 2)

/* Function expression / anonymous
parametros (parameters) */
const sum = function(number1, number2) {
  let total = number1 + number2
  return total
}
console.log(sum(2, 5)) // arguments - argumentos

let number1 = 10
let number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)