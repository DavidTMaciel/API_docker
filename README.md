# API Prisma Docker

Esta é uma API que oferece funcionalidades CRUD (Create, Read, Update, Delete) para o recurso de usuário. Ela utiliza o Prisma e roda com Docker.

## Funcionalidades

A API possui as seguintes funcionalidades para o recurso de usuário:

- Criar um novo usuário
- Ler informações de um usuário específico
- Atualizar as informações de um usuário existente
- Excluir um usuário

## Endpoints

A API expõe os seguintes endpoints para interagir com o recurso de usuário:

- `POST /user`: Cria um novo usuário com base nos dados fornecidos no corpo da requisição.

-  `GET /users`: Retorna as informações de todos os usuarios cadastrados.

- `GET /user/:id`: Retorna as informações de um usuário específico com base no ID fornecido na URL.

- `PUT /user/update/:id`: Atualiza as informações de um usuário específico com base no ID fornecido na URL e nos dados fornecidos no corpo da requisição.

- `DELETE /user/delete/:id`: Exclui um usuário específico com base no ID fornecido na URL.

## Parâmetros

Os seguintes parâmetros são utilizados nas requisições para os endpoints da API:

- `:id` (obrigatório): O ID único do usuário que está sendo manipulado.

- Corpo da requisição (para criação e atualização de usuários): Deve conter os dados necessários para criar ou atualizar um usuário, como nome, email, senha, etc.

## Pré-requisitos

Antes de prosseguir, verifique se você tem o seguinte software instalado em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org) (versão 18.13.0 ou superior)
- [Yarn](https://yarnpkg.com) (versão 1.22.19 ou superior)
- [Docker](https://www.docker.com/) (versão 24.4.2 ou superior)




## Instalação

```bash
# entrar na pasta do projeto 
cd api_prisma_docker
# Instalando dependecias
$ yarn intall
```

## Configuração do ambiente

 Abra o arquivo .env e ajuste as variáveis de ambiente conforme necessário.
 
## Inicialização da API
1. Inicie a API executando o seguinte comando:
```bash
$ yarn start
```
2. A API será iniciada e estará disponível em http://localhost:3031.

## Problemas
Se você encontrar algum problema ou tiver alguma dúvida, por favor, abra uma issue neste repositório.

## Author
 David Tinoco Maciel 
 
 Linkedln: https://www.linkedin.com/in/david-maciel-36347518b/ 
