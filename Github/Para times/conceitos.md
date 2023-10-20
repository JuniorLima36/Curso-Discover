># `Branches`
`Comando`       | `Significado`
---------       |---------------------
git branch      | mostra a branch atual  
git checkout    | trocar de branch 
git checkout -a | ver as branchs 
git checkout -b | criar uma branch 
git checkout -d | deletar uma branch local
git push origin --delete exBranch | deletar branch da nuvem
git fetch       | atualiza o repositorio local com as branchs disponiveis na nuvem
git fetch -p    | atualiza removendo uma branch local que nao consta na nuvem.

- `Branch` : Criar uma branch pode ser bastante util se voce fica responsavel por uma tarefa no projeto, mas não quer enviar diretamente pra branch principal.

- `Brach protection rule` : é muito importante em um projeto com ele se obtem controle de conteudo assim evitando possiveis erros, uma pessoa ou mais pode ficar responsavel por essa função de revisar conteudo e aprovar, a aprovação vai depender das  regras estabelecidas.  
>`Algumas regras :`
  - Exigir uma solicitação de pull antes de fazer a mesclagem.
  - Número de aprovações obrigatórias antes da mesclagem
  - Exigir aprovação do push revisável mais recente
  - Exigir commits assinados.

># `Merge`
`Comando`       | `Significado`
---------  |---------------------
git merge  | serve para trazer todo conteudo de uma branch para outra, basta entrar em uma branch por ex: main e depois dar o comando merge exampleBranch assim trara todo conteudo que existe na branch.   

- Merge acaba sendo bastante util para unir o conteudo que cada um do time esta trabalhando.

># `Pull Request`
- Pedido de envio de uma branch para outra,
basicamente voce abre uma requisição de envio do conteudo da sua maquina para o repositorio na nuvem, o ADM vai revisar o conteudo e aprovar se estiver tudo certo.

- `Conflito` : exemplo basico uma alteração feita em um arquivo que ja foi para nuvem, mas nao tem na sua maquina essa alteração. Esse conflito acontece para evitar que voce altere alguma linha que uma outra mesma pessoa alterou.

- `Abrindo uma pull request` : Voce pode subir a sua branch usando o comando `git push origin exBranch` é assim abrir uma pull request, ou pode fazer manualmente indo no github direto no projeto.
  - `Abertura manual` 
  - `Comparing changes` : escolher as duas branch para fazer a comparação dos conteudos.  
  - `Create pull request` :
    - `Write` : para fazer um comentario a respeito do conteudo
    - `Reviewers` : quem deve fazer a aprovação
    - `Assignes` : responsavel 
    - `Labels` : flags para sinalizar
  - `Alteração` : supondo que precise ter uma alteração em um arquivo, depois de feita e comitada voce deve pedir novamente a aprovação `Re-request review`
  - `Conclusão` : depois de ter aberto uma pull request, o conteudo ter sido revisado e aprovado voce ira ate `merge pull resquest` para finalizar o processo. Depois disso tera a opção de deletar a branch caso voce não queira mais usala, posteriormente ela pode ser restaurada caso queira.
># Issues
- `Issue` : São questões não resolvidas, serve para conversar sobre o projeto.
- `Exemplo` : Imagine que seja solicitado a melhoria do contato em uma pagina, o dev faz as alterações no arquivo e depois linka uma `pull request` dentro da propria `Issue` explicando que a mesma ja foi resolvido e o topico ja pode ser encerrado.

># Projects
- No seu projeto no github voce tem a opção project, é uma area que voce pode usar para organizar seu projeto, e ja linkar as tarefas com `Issues` ou `pull request` para o time de devs, assim `project => issue => pull resquest` fica tudo linkado amarradinho.