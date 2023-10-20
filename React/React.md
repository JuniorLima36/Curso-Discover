># React Conceitos
- No react é usado a sintaxe jsx para que voce possa criar interfaces de forma declarativa

- No react tudo é javascript mas teremos funções que retorna um HTML

- A extensão jsx permite que voce trabalhe com a importação e utilização dos componentes e dos elementos, muito parecido com o esquema de tags do HTML

- Tag fragment: <></> serve para embrulhar todos os elementos retornando um pacote que é um unico elemento, a extensão jsx tem a regra de que devese retorna somente um elemento filho.
````
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
````
- Boas praticas de organização de componentes, para se ter facilidade em mexer em um componente especifico da pagina.

- Componente : Os componentes permitem que você divida a interface do usuário em partes independentes e reutilizáveis e pense em cada parte isoladament, facilitando a manutenção, reutilização e organização de codigo.

- Propriedades : reutiliza mesmo componente com propriedades diferente, voce pode utilizar props ou fazer uma desestruturação das propriedades.
````
export function Card(props) {
  return (
    <div className='card'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
````
- UseState : Retorna um valor e uma função para atualizar o valor.  
Durante a renderização inicial, o estado retornado é o mesmo que o valor passado como argumento inicial (initialState).  
A função setState é usada para atualizar o estado. Ela aceita um novo valor de estado e coloca na fila de re-renderização do componente.
````
const [state, setState] = useState(initialState);
````
- Hooks : São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

- UseEffect : Ele permite você execute efeitos colaterais no seu código. Mas o que seriam esses efeitos colaterais? Buscar dados de uma API, mudar a DOM, ou configurar uma subscription, por exemplo, são algumas opções de efeitos colaterais no seu código.  
````
useEffect(() => {
  fetch('https://api.github.com/users/')
  .then(res => res.json())
  .then(data => {
    setUser({
      name: data.name,
      avatar: data.avatar_url
    })
  })
}, []);
````
># Css 
- É uma boa pratica resetar essas propriedades, porque cada navegador tem as suas configurações.
````
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
````
- Uma boa escolha de fontes para padronizar o projeto 
