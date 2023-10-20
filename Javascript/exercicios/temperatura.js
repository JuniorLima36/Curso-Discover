function temp(grau) {
  const c = grau.toUpperCase().includes('C')
  const f = grau.toUpperCase().includes('F')

  if(!c && !f) {
    throw new Error('Grau não identificado')
  }

  let attGrau = Number(grau.toUpperCase().replace('F', ''));
  let formula = (f) => (f - 32) * 5/9
  let sinalGrau = 'C'

  if(c){
    attGrau = Number(grau.toUpperCase().replace('C', ''));
    formula = c => c * 9/5 + 32
    sinalGrau = 'F'
  }

  return formula(attGrau) + sinalGrau
}

try {
  console.log(temp('10F'))
  console.log(temp('50F'))
  temp('50Z')
} catch (error) {
  console.log(error.message)
}