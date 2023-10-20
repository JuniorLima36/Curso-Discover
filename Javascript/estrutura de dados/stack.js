/*
# Stack
  - linear um apos o outro 
  - o ultimo a entrar na pilha é o primeiro a sair 
- Metodos fundamentais
  - push() adicionar um elemento a pilha
  - pop() remover o elemento do topo da pílha
  - peek() obter o elemento do topo da pilha
  - size() para obter o tamanho da pilha
*/

// Modelando
class Stack {
  constructor() {
    this.data = []
    this.top = -1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if(this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

// Utilizando
const stack = new Stack()

// Adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))
console.log(stack.peek())

// Remover
stack.pop()
console.log(stack.pop())
console.log(stack.peek())