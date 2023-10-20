function notas(nota) {
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota >= 60 && nota <= 0

  let notaFinal;

  if(notaA){
    notaFinal = 'A'
  } else if (notaB) {
    notaFinal = 'B'
  } else if (notaC) {
    notaFinal = 'C'
  } else if (notaD) {
    notaFinal = 'D'
  } else if (notaF) {
    notaFinal = 'F'
  } else {
    notaFinal = 'Nota invalida'
  }

  return notaFinal
}

console.log(notas(101))
console.log(notas(-1))
console.log(notas(0))
console.log(notas(1))
console.log(notas(45))
console.log(notas(60))
console.log(notas(61))
console.log(notas(75))
console.log(notas(85))
console.log(notas(95))