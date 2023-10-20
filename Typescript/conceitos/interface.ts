/*
# Interface

Outra maneira de criar tipagens no TypeScript é utilizando a interface.
*/

interface User {
  id: number
  name: string,
}

let newUser: User = {
  id: 1,
  name: "João"
}

function registerNewUser(newUser: User){
  newUser.id
  newUser.name
}