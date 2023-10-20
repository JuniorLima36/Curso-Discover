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

# Comandos
>- **INSERT INTO** 
```
INSERT INFO aluno (nome, cpf, responsavel) VALUES ("Maria luiza", 45848485584, "Carlos santana")
```
>- **UPDATE** 
```
UPDATE aluno SET nome="Carolina soares", responsavel="Marcio soares" WHERE matricula = 2
UPDATE aluno SET nome="Carolina soares", responsavel="Marcio soares", cpf=565645654 WHERE matricula = 2
```
>- **DELETE : Cuidado com este comando** 
```
DELETE FROM aluno WHERE matricula = 3  
```