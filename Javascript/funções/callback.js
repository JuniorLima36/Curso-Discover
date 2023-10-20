/*
# Callback function
- 
*/
const voltando = (name) => {
  console.log('Dentro da função')
  name()
  console.log('final da função')
}
voltando(() => {
  console.log('Voltando pra função')
})