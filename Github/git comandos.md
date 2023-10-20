# Comandos do git para arquivos
Comando                         | Significado
----------------                |----------------------
ls -al                          | ver todos os arquivos dentro da pasta
git status                      | status dos arquivos
git log                         | ver os pontos da historia
git add .                       | adicionar todos os arquvios  
git add *md                     | adicionar todo arquivo que tenha .md  
git add text.md                 | adicionar um arquivo especifico
git diff                        | ver modificações em arquivos
git diff --staged               | Compara arquivos do stage com repositorio
git rm                          | Remover arquivos
git mv                          | Renomear arquivos
git mv                          | Tambem serve para mover arquivos, indique o arquivo e o caminho
git restore                     | comando e o arquivo para restaurar uma modificação
git restore --staged            | comando e o arquivo para remover um arquivo que esteja no stage
git commit --amend -m ''        | Modificar o ultimo commit feito
git checkout a25d655 -- text.md | trazer um arquivo ou recuperar de outro commit mais antigo.
git clean -f                    | remover arquivos não rastreados
git revert a25d655              | revertendo um commit
git commit -am                  | atalho para commit de um arquivo modificado que esteja no repositorio
git show a25d65                 | mostrar as modificações de um commit para outro

# Github
Comando         | Significado
----------------|----------------------
git push        | subir o repositorio para a nuvem
git pull        | puxar as alterações da nuvem para o repositorio local

## Merge
- Conflito Merge - significa trazer as alterações da nuvem para o repositorio local, e mandar as minhas alterações para a nuvem