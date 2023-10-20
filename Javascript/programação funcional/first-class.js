/*
First-class function
- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável
*/

const sayMayName = () => console.log('Junior')
const runFunction = fn => fn()

runFunction(sayMayName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))