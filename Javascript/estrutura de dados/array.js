/*
# Arrays
- São dinamicos
- Voce podera ter dados de diferentes tipos misturados dentro de um array.
  - Strings
  - Numbers
  - Booleans
  - Objetos
  - Funções
  - Outros arrays
- Existem muitos metodos ja implementados
  - push()
  - pop()
  - find()
  - filter()
  - entre outros
*/

const frutas = ['abacaxi', 'banana', 'maçã', 'melancia', 'abacate', 'laranja']

// a indexação (index) começa pelo numero 0
console.log(frutas[0]) // abacaxi
console.log(frutas[3]) // melancia

// acessar o tamanho do array
console.log(frutas.length)

// iteravel
for (let fruta of frutas) {
  console.log(fruta)
}

// adicionar elemento
frutas.push('uva')
console.log(frutas)

// encontrar um elemento
const laranja = frutas.find(fruta => fruta === 'laranja')
console.log(laranja)

// deletar um elemento
frutas.slice(1, 1)
console.log(frutas)