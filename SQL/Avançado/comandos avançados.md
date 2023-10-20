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
---
Sintaxe  | Significado
---------|-----------------
ORDER BY | organiza por
LIMIT    | limita
OFFSET   | ignorar
COUNT    | contar por
GROUP BY | agrupar semelhantes
HAVING   | especificar condições de filtragem em grupos de registros ou agregações.
---
>- **ORDER BY** 
```
SELECT * FROM professor 
ORDER BY cpf DESC
```
>- **LIMIT** 
```
SELECT * FROM funcionarios 
LIMIT 4 
```
>- **OFFSET** 
```
SELECT * FROM funcionarios 
LIMIT 4 OFFSET 2
```
>- **COUNT** 
```
SELECT COUNT(nome) FROM funcionarios 
SELECT COUNT(id_departamento) FROM funcionarios 
```
>- **GROUP BY** 
```
SELECT id_departamento, COUNT(id_departamento) 
FROM funcionarios 
GROUP BY id_departamento
```
>- **JOIN, GROUP BY e COUNT** 
```
SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY funcionarios.id_dept
```
>- **HAVING** 
```
SELECT departamentos.descricao, COUNT(funcionarios.id_departamento) 
FROM funcionarios
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY departamentos.id_dept
HAVING COUNT(funcionarios.id_departamento) in (2, 4)
```