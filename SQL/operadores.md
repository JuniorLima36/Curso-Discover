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

# Operadores
>- **+ adição** 
```
SELECT * FROM aluno WHERE matricula = 1 + 2  
```
>- **- subtração** 
```
SELECT * FROM aluno WHERE matricula = 3 - 1  
```
>- **'*' multiplicação** 
```
SELECT * FROM aluno WHERE matricula = 2 * 1  
```
>- **/ divisão** 
```
SELECT * FROM aluno WHERE matricula = 3 / 2  
```
>- **% modulo** 
```
SELECT * FROM aluno WHERE matricula = 4 % 3  
```