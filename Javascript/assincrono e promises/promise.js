/*
# Promise

- é um objeto javascript com a promessa de que algo sera realizado
- é usada para operações assincronas
  - carregar um arquivo
  - leitura da dados de uma API
- uma promessa podera ser: 
  - pedding: estado inicial, assim que o objeto da promessa é iniciado 
  - fulfilled: a promessa foi concluida com sucesso
  - reject: a promessa foi rejeitada, houve um erro
  - settled: seja com sucesso ou com erro, ela foi finalmente concluida
*/
let aceitar = true

console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
  if(aceitar) {
    return resolve('pedido aceito')
  } else {
    return reject('pedido negado')
  }
})
console.log('aguardando')

promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('finalizado'))


// promise com fetch
fetch('https://api.github.com/users/timmywheels/')
  .then(res => res.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err))