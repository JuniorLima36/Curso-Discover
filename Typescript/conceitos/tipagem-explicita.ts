/*
# Tipagem explícita

Na tipagem explícita nós especificamos o qual será o tipo de cada variável.
*/

function ticket(user: string, ticket: number) {
  console.log(`ola ${user}. Numero do bilhete: ${ticket}`)
}
ticket('Junior', 456)