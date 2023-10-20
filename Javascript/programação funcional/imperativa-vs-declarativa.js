/*
Programação imperativa
- O código é pensado e gerado em sequência.
- O código é pensando como um passo-a-passo, como um receita de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

Programação declarativa
- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo
*/

// # Função que eleva o número ao quadrado
// Imperativo: Faça da seguinte forma
let number = 2

function square() {
  return number * number
}
number = square()

// Declarativa: O que fazer e não como fazer.
const square = n => n * n
