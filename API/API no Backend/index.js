const express = require('express')
const app = express()
app.listen('3333')

// middleware
app.use(express.json())

// Exemplo GET
app.route('/').get((req, res) => res.send('hello world'))

// Exemplo POST
app.route('/').post((req, res) => res.send(req.body))

// Exemplo PUT
let author = 'junior'
app.route('/').get((req, res) => res.send(author))
app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})

// Exemplo DELETE
app.route('/:id').delete((req, res) => {
  res.send(req.params.id)
})