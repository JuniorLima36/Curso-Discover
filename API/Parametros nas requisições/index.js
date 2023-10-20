const express = require('express')
const app = express()

app.listen('3000')

// middleware
app.use(express.json())

// Body params
app.route('/').post((req, res) => {
  const { nome, cidade, telefone } = req.body
  res.send(`Dados : ${nome} ${cidade} ${telefone}`)
})

// Route params
app.route('/').get((req, res) => res.send("ola"))
app.route('/:variavel').get((req, res) => res.send(req.params.variavel))
app.route('/id/:nome').get((req, res) => res.send(req.params.nome))

// Query  params
app.route('/').get((req, res) => res.send(req.query.nome))
app.route('/about/user').get((req, res) => res.send(req.query))
