/*
 # object
  - Objeto
  - Propriedades / Atributos
  - Funcionalidades / Metodos

  { propriedade: 'valor' }
*/

pessoa = {
  nome: 'João',
  sobrenome: 'silva',
  idade: 22,
  altura: 1.75,
  peso: 85,
  imc: function(altura, peso) {
    let imc = altura * peso
    return imc
  }
}

console.log(typeof pessoa)
console.log(pessoa)
console.log(pessoa.imc(1.75, 85))