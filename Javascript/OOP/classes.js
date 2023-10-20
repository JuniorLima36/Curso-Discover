/*
# classes

As classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.
  - Exemplo: maquina de biscoitos
    - Instancias

# Classes em JS
  - Syntactical sugar
  - Prototype
*/

// definir classe
class Pessoa {
  constructor(nome) {
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }

  falarNome() {
    console.log(this.nome)
  }
}

// criar objeto
const pessoa = new Pessoa('carlos')
console.log(pessoa)