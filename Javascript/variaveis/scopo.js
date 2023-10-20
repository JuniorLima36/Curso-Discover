/*# Scopo
- Escopo determina a visibilidade de alguma variavel no JS
# Block statement */
{
  let x = 10
  console.log(x)
}
// O bloco, tambem criara um novo escopo. chamamos de 'block-scoped'

/* # var
- Var é global e poderá funcionar fora de um escopo de bloco 
- Acaba acontecendo o hoisting, é o içamento da variavel antes de ser definida preveamente */
console.log(`Existe y antes do bloco? ${y}`)
{
  var y = 10
}
console.log(`Existe y depois do bloco? ${y}`)

/* # const e let
- Const e Let são locais e só funcionam dentro de um escopo de bloco onde foi criado */
console.log(`Existe z antes do bloco? ${z}`)
{
  let z = 10
  console.log(`existe z ${z}`)
}
console.log(`Existe z depois do bloco? ${z}`)