/*
# Abstração

- Template ou identidade de uma classe que sera construida no futuro
- Atributos e metodos podem ser criados na classe de abstração (Superclasse) MAS
- A implementação dos metodos e atributos, só podera ser feita na classe que ira herdar essa abstração
*/

// Definir
class Parafuso { // Superclass - abstrata
  constructor() {
    if(this.constructor === Parafuso)
      throw new Error('Classe abstrata não pode ser instanciada')
  }
  get tipo() {
    throw new Error('Classe abstrata não pode ser instanciada')
  }
}

class Fenda extends Parafuso {
  constructor() { super() }

  get tipo() {
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() { super() }

  get tipo() {
    return 'philips'
  }
}

class Allen extends Parafuso {}

// Criar e usar
new Parafuso() // Classe abstrata não pode ser instanciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // 'Metodo "get tipo()" precisa ser implementado