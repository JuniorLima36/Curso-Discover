const express = require('express')
const axios = require('axios')
const app = express()

app.listen('3003')

// middleware
app.use(express.json())

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/juniorlima36')
  .then(result => res.send(result.data))
  .catch(error => console.error(error))
})
