/*
# Constructor function
  - Expressão new
  - Criar um novo objeto
  - this keyword
*/
function Pessoa(nome) {
  this.nome = nome
  this.andar = function() {
    return this.nome + ' está andando'
  }
}

const amanda = new Pessoa('amanda')
const carlos = new Pessoa('carlos')
console.log(amanda.andar())
console.log(carlos.andar())