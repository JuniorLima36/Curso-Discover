># O que é o TypeScript?

A diferença entre o JavaScript e TypeScript é a sua tipagem que no JS não é obrigatório, já no TS é obrigatório, mas nem pra todos os casos. Algumas vantagens de utilizar o TS é que a sua adoção pode ocorrer de forma gradual em um projeto JavaScript.

># Porquê utilizar TypeScript?

A maior vantagem de usar o TypeScript além de aumentar a nossa produtividade no dia a dia é ele reconhecer os erros durante o desenvolvimento, diferente do JavaScript que reconhecerá apenas quando o projeto é executado.

># Verificação tipo estático

Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:
````
const userName = "João Inácio"

userName()
````
Ao tentar como uma função o TypeScript nos avisará que o que estamos querendo executar é uma variável do tipo String.

># Tipagem explícita

Na tipagem explícita nós especificamos o qual será o tipo de cada variável.
````
function ticket(user: string, ticket: number) {
  console.log(`ola ${user}. Numero do bilhete: ${ticket}`)
}
ticket('Junior', 456)
````

># Any

Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.
````
let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

// Com o tipo any a variável aceitará qualquer valor.
````
># Inferência de tipos

O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.
````
let user = "João"

user = 10
````
Ao tentarmos passar um valor número para a variável o TypeScript, mesmo sem informar a tipagem, informará que essa variável só aceita o tipo string

># Tipos primitivos

Esses são os tipos primitivos que podemos utilizar no TypeScript:
````
let loading: boolean;
loading = false;

let email: string;
email = "joao@email.com";

let price: number;
price = 10.50;
price = 10;
````

># Matrizes

Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:
````
let numbers: number[];
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ['Rodrigo', 'João'];
````

># Funções

Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

Dessa maneira, tipamos dessa forma no TypeScript:
````
function showMessages(message: string):void {
    console.log(message)
}
````
Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.
````
function showMessages(message: string) {
   return message;
}

console.log(showMessages("Oi, João"))
````
Mesmo sem informamos a tipagem, o TS já reconhece que a função é do tipo string

># Union

O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável.
````
function printUserId(id: number | string) {
    console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string
````

># Generics

O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma T podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

- S → Representando State 
- T → Representando Type 
- K → Representando Key 
- V → Representando Value 
- E → Representando Element

Exemplo de um trecho de código utilizando generics:
````
function useState<T>() {
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return { get, set}
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);
````

># Type

Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.
````
type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;
````

># Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.
````
type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
````
Fazendo a asserção o TypeScript reconhecerá o que tem disponível dentro daquele objeto.

># Objetos

Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.
````
type Point = {
    x: number;
    y: number;
}

function printCoord(points: Point) {
    console.log(`O eixo x é: ${points.x}`)
    console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})
````

># Opcional

Para informamos que uma propriedade é opcional inserimos o sinal de ?
````
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean; // isAdmin não será obrigatória na sua declaração
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}
````

># Intersecção de tipos

A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.
````
type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}
````

># Interface

Outra maneira de criar tipagens no TypeScript é utilizando a interface .
````
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
````

># Type e Interface

O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:
````
type TUser = {
    id: number;
    name: string;
}

type TPayment = {
    method: string;
}

// Fazendo união com Type
type TAccount = TUser & TPayment

interface IUser {
    id: number;
    name: string;
}

interface IPayment {
    method: string;
}

// Fazendo união com interfaces
interface IAccount extends IUser, IPayment {}
````
># tsconfig

É um arquivo de configuração do TypeScript, ele pode ser escrito tanto em formato de JavaScript quanto no formato JSON.

Exemplo de um arquivo tsconfig.json :
````
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
````