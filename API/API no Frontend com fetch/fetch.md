># Usando Fetch
- A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() (en-US) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

- Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest. Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers (en-US). Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

># Fazendo as requisições Fetch
- Uma requisição fetch é realizada para configuração. Temos um exemplo no seguinte código:
````
var myImage = document.querySelector('img');

fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
````