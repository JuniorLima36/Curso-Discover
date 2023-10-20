// switch

function calc(num1, op, num2) {
  let result
  switch(op) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 - num2
      break
    case '/':
      result = num1 - num2
      break
    default:
      console.log('não implementado')
      break
  }
  return result
}

console.log(calc(4, '+', 2))