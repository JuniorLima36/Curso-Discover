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

# Operadores Relacionais
> - **igual**
```
SELECT * FROM aluno WHERE matricula = 3  
```
>- **like** 
```
SELECT * FROM aluno WHERE nome like "joão castro"  
SELECT * FROM aluno WHERE responsavel like "josefina%"  
SELECT * FROM aluno WHERE nome like "%c%"  
```
>- **> maior que** 
```
SELECT * FROM aluno WHERE matricula > 2  
```
>- **< menor que** 
```
SELECT * FROM aluno WHERE matricula < 3  
```
>- **>= maior ou igual que** 
```
SELECT * FROM aluno WHERE matricula >= 2  
```
>- **<= menor ou igual que** 
```
SELECT * FROM aluno WHERE matricula <= 2  
```
>- **<> nao igual a** 
```
SELECT * FROM aluno WHERE matricula <> 3  
```
>- **!= diferente de** 
```
SELECT * FROM aluno WHERE matricula != 3  
```