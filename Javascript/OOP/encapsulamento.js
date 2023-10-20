/*
# Encapsulamento
  - Colocar numa capsula
  - Agrupamento de funções e variaveis
  - Esconder detalhes de implementação
  - Camada de segurança para os atributos e metodos
*/

// Estrutural
let altura = 50
let largura = 60

function calcularArea() {
  return altura * largura
}

let area = calcularArea()

// Orientado a objetos
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

// Criar o objeto
let poligone = new Poligono(50, 60)
console.log(poligone)
console.log(poligone.area)