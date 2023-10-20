// throw  
function nome(name = '') {
  if(name === ''){
    throw 'Nome é obrigatorio'
  }
  console.log('depois do erro')
}

//  try catch
try {
  nome()
} catch(e) {
  console.log(e)
}
console.log('após a função de erro')