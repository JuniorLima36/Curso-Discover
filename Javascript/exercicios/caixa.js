let familia = {
  rendimentos: [2500, 3200, 250.43, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450.00],
}

function soma(array) {
  let total = 0;

  for(let valor of array){
    total += valor
  }

  return total
}

function balanco() {
  const calcRend = soma(familia.rendimentos)
  const calcdesp = soma(familia.despesas)

  const total = calcRend - calcdesp
  const ok = total >= 0

  let balanco = 'negativo'
  if(ok) {
    balanco = 'positivo'
  }
  console.log(`Seu saldo é ${balanco}: R$ ${total.toFixed(2)}`)
}

balanco()