/* 
# Manipulando Strings e Array
  - Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
*/
let string = 'Programar não é facil'
let texto = string.split('')
let under = texto.join('_')
console.log(string.toLowerCase())