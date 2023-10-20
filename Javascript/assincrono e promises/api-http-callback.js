// Conectando API com HTTPS e Callback
const http = require('https');
const api = 'https://api.github.com/users/timmywheels/repos?ref=codesnippet.io'
http.get(api, res => {
  console.log(res.statusCode)
})
console.log('Conectando api')