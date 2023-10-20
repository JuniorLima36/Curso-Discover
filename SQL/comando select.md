# Comando Select
> - **select**
>- **select especificando campos** 
>- **select com where** 

Como Exemplo temos um banco de dados com as tabelas : 
--- 
**Aluno**
- matricula  
- nome
- cpf
- responsavel  

**Aulas**
- id_professor  
- id_aluno

**Professor**
- id_professor 
- nome
- cpf
- materia  
----
>**select :**

Exemplo | SELECT * FROM alunos
------- |---------------------
select  | buscar informações  
'*'     | todas as informações
from    | de onde
- retornando todos os dados da tabela aluno
----
>**select : especificando campos**
```
SELECT nome, responsavel FROM aluno  
```
- retornando o nome do aluno e o responsavel  
```
SELECT nome, materia, cpf FROM professor
```
- retornando o nome, materia e cpf do professor 
---  

>**select : com where**

Exemplo | SELECT * FROM aluno WHERE nome like "j%"
------- |---------------------
where   | onde  
like    | igual
"j%"    | procure um dado que comece com o caractere J p resto nao importa
"%j%"   | procure um dado que contenha o caractere J nele

----
**Exemplos**  
```
SELECT * FROM aluno WHERE matricula = 1
```
- retornando um aluno que tenha a matricula igual a 1
```
SELECT * FROM aluno WHERE nome like "j%"`
```
- retornando todos os campos da tabela aluno com o nome que começa com J