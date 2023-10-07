# Sistema de Cadastro de Alunos em Node.js - Exercício - Primeiro Estágio SPI Unipe 2023.2

Sistema de cadastro de alunos desenvolvido em Node.js com Express, Sequelize e Pug.

## Instalação

1. Clone este repositório.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Configure o banco de dados no arquivo `./db/db.js`.
5. Execute `npm start` para iniciar o servidor.
6. Acesse `localhost:5000` para acessar a aplicação.

## Funcionalidades

- Listar todos os alunos.
- Cadastrar um novo aluno e suas notas.
- Calcular a média das notas e determinar a situação do aluno (Aprovado, Recuperação, Reprovado).

## Rotas

- `GET /`: Lista todos os alunos.
- `GET /cadastrar`: Exibe o formulário de cadastro de aluno.
- `POST /gravar`: Grava os dados do aluno no banco de dados.

## Tecnologias utilizadas

- Node.js: Um ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.
- Express: Um framework web rápido, descomplicado e minimalista para Node.js.
- Sequelize: Um ORM baseado em promessas para Node.js e io.js. Ele suporta as sintaxes de SQL do Postgres, MySQL, MariaDB, SQLite e MSSQL.
- Pug: Uma linguagem de template de alto desempenho e robusta para Node.js.
