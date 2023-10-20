/*
# Verificação tipo estático

Já sabemos que o TypeScript verifica erros antes da execução, mas vamos ver isso na prática:
*/

const userName = "João Inácio"

userName()

// Ao tentar como uma função o TypeScript nos avisará que o que estamos querendo executar é uma variável do tipo String.