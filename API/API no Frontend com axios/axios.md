># O que é o Axios?
- Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

># Executando uma requisição GET
````
const axios = require('axios');

// Faz uma requisição a um usuarío com um ID expecifico
axios.get('/user?ID=12345')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });

// Opcionalmente a requisição acima poderia ser feita assim da seguinte forma
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });  

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
````