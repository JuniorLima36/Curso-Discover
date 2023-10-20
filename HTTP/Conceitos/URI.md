># URI

- `Conceito`
  - `Uniforme Resource Identifier`
    - Identificar um recurso
    - Nome ou localização
  - `Exemplo`
    - Voce é um recurso
    - Seu nome
    - Seu localização

- `Resource`
  - `Alvo do pedido`
    - https://google.com.br
  - `Qualquer coisa identificavel / Entidade`
    - `Digital`
      - Email
        - mailto:email@dominio.com
    - `Abstrato`
      - Sessão
      - Autenticação
    - `Fisica`
      - Produtos
      - Usuarios
    - Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um recurso

- `Locator`
  - `URL = Uniform Resource Locator`
    - `Componentes`
      - `Obrigatorios`
        - Protocolo
        - Dominio
      - `Opcionais`
        - Subdominio  = www
        - Path        = /blog
        - Parametros  = watch?v=vpYct2npKD8
        - Porta       = 3333
        - Âncora      = /index.html#algumlugar
    - `Exemplos`
      - Obrigatorios : https://www.rocketseat.com.br/blog
      - Opcionais : https://www.youtube.com/watch?v=vpYct2npKD8
        - https://127.0.0.1:3333/index.html#algumlugar

- `Name`
  - `URN = Uniform Resource Name`
  - `Exemplo`
    - urn:isbn:0451450523 = identificação de um livro no mundo.
    - urn:oasis:names:specification:docbook:dtd:xml:4.1.2