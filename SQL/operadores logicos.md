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

**Departamentos**
- id_dept 
- descricao  

**Funcionarios**
- id_funcionarios 
- nome
- cpf
- id_departamento

# Operadores logicos
>- **AND : junta duas condições** 
```
SELECT * FROM aluno WHERE nome like "j%" AND matricula < 2
SELECT * FROM aluno WHERE nome like "j%" AND matricula > 2
```
>- **OR : satisfaz uma ou outra condição** 
```
SELECT * FROM aluno WHERE matricula > 1 OR nome like "G%"  
```
>- **BETWEEN** 
```
SELECT * FROM funcionarios WHERE id_funcionario BETWEEN 4 AND 7  
SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 AND 7  
```
>- **IN e NOT IN** 
```
SELECT * FROM funcionarios WHERE id_departamento IN (1, 3, 5)  
SELECT * FROM funcionarios WHERE id_departamento NOT IN (1, 3, 5)  
```
>- **IS NULL e IS NOT NULL** 
```
SELECT * FROM funcionarios WHERE id_departamento IS NULL  
SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL  
```