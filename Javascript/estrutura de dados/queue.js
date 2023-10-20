/*
# Queue
  - linear um apos o outro 
  - o primeiro a entrar na fila e o primeiro a sair
- Metodos fundamentais
  - enqueue() adicionar um elemento ao final da fila
  - daqueue() remover o primeiro elemento a entrar na fila
  - size() para obter o tamanho da pilha
  - front() para pegar o primeiro elemento da fila
*/

// Modelando
class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou a fila!`)
  }

  daqueue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

// Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Ariel')
fila.enqueue('João')
fila.enqueue('Bruna')