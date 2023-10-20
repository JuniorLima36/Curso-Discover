/* 
# Manipulando Arrays
*/

let meuArray = ['html', 'css', 'js']

// adicionar um item no fim
meuArray.push('react')

// adicionar no começo
meuArray.unshift('nodejs')

// remove do fim
meuArray.pop()

// remove do começo
meuArray.shift()

// pegar somente
meuArray.slice(1, 3)

// remover 1 ou mais items em qualquer posição do array
meuArray.splice(1, 2)

// encontrar a posição de um elemento no array
let index = meuArray.indexOf('css')
