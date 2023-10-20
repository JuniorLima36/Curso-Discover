Como Exemplo temos um banco de dados com as tabelas : 
--- 
**Departamentos**
- id_dept 
- descricao  

**Funcionarios**
- id_funcionarios 
- nome
- cpf
- id_departamento
---
Sintaxe         | Significado
----------------|-----------------
JOIN            | combina colunas de uma ou mais tabelas em um banco relacional
ON              | define o grupo de arquivos em que a tabela será criada
ALIAS (AS)      | renomear/abreviar nome de um campo
LEFT OUTER JOIN | permite obter não apenas os dados relacionados de duas tabelas, mas também os dados não relacionados encontrados na tabela à esquerda da cláusula JOIN
---
>- **JOIN** 
```
SELECT * FROM funcionarios 
JOIN departamentos
ON departamentos.id_dept = funcionarios.id_departamento
```
>- **JOIN WHERE** 
```
SELECT * FROM funcionarios 
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept
WHERE departamentos.id_dept = 2
```
>- **JOIN : Especificando campos** 
```
SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao 
FROM funcionarios 
JOIN departamentos
ON funcionarios.id_departamento = departamentos.id_dept  
```
>- **ALIAS (AS)** 
```
SELECT func.nome as "Nome", func.cpf as "CPF", dept.descricao as "Departamento"
FROM funcionarios as func 
JOIN departamentos as dept
ON func.id_departamento = dept.id_dept  
```

>- **LEFT OUTER JOIN** 
```
SELECT * FROM departamentos LEFT OUTER JOIN funcionarios ON funcionarios.id_departamento = departamentos.id_dept  
SELECT * FROM funcionarios LEFT OUTER JOIN departamentos ON funcionarios.id_departamento = departamentos.id_dept 
```