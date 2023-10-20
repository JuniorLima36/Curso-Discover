// Estrutura de repetição (for in)

let pessoa = {
  nome: 'edu',
  age: 30,
  altura: 1.80
}

for(let propriedade in pessoa){
  console.log(propriedade)
  console.log(pessoa[propriedade])
}