/*
# Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.
*/

type UserResponse = {
  id: number;
  name: string;
  avatar: string;
}

let userResponse = {} as UserResponse;

// Fazendo a asserção o TypeScript reconhecerá o que tem disponível dentro daquele objeto.