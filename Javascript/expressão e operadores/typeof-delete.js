/*
# Operadores Unarios
- typeof
- delete
*/
const pessoa = {
  nome: 'zé',
  idade: 45,
  altura: 1.85
}
delete pessoa.altura

console.log(typeof pessoa)
console.log(pessoa)