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
Sintaxe       | Significado
--------------|-----------------
CREATE TABLE  | Criar tabela
ALTER TABLE   | Alterar tabela
DROP TABLE    | Deletar tabela
---
>- **CREATE TABLE** 
```
CREATE TABLE alunos (
  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  responsavel TEXT
)

CREATE TABLE professores (
  id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
  materia TEXT
)

CREATE TABLE aulas (
  id_professor INTEGER,
  matricula INTEGER,
  FOREIGN KEY(id_professor) REFERRENCES professores(id_professor),
  FOREIGN KEY(matricula) REFERRENCES alunos(matricula)
)
```
>- **ALTER TABLE** 
```
ALTER TABLE aluno RENAME TO alunos
ALTER TABLE professor RENAME TO professores
ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno
```
>- **DROP TABLE : Cuidado com esse comando** 
```
DROP TABLE alunos
DROP TABLE aulas
DROP TABLE professores
```