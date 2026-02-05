# API REST de Usuários

API REST para gerenciamento de usuários, desenvolvida com **Node.js** e **Express**, aplicando os princípios do CRUD e boas práticas no uso de métodos HTTP.

Este projeto foi criado com foco em **aprendizado e portfólio**, demonstrando organização de rotas, validações básicas e testes de requisições HTTP.

---

## 📌 Funcionalidades

* Listar todos os usuários
* Buscar usuário por ID
* Cadastrar novo usuário
* Atualizar todos os dados de um usuário (PUT)
* Atualizar dados específicos de um usuário (PATCH)
* Remover um usuário

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript
* REST Client (VS Code)

---

## 📁 Estrutura do projeto

```
src/
 ├── routes/
 │    └── usuarios.routes.js
 ├── data/
 │    └── usuarios.js
 └── index.js

local.http
```

---

## ▶️ Como executar o projeto

1. Clone o repositório

```bash
git clone https://github.com/heitorsepulcrii/API-REST-de-Usuarios.git
```

2. Acesse a pasta do projeto

```bash
cd API-REST-de-Usuarios
```

3. Instale as dependências

```bash
npm install
```

4. Inicie o servidor

```bash
node src/index.js
```

O servidor será executado em:

```
http://localhost:3000
```

---

## 🔧 Testes das rotas

As rotas da API podem ser testadas utilizando o arquivo **`local.http`**, por meio da extensão **REST Client** do VS Code.

Após iniciar o servidor, basta abrir o arquivo `local.http` e executar as requisições para testar os métodos **GET, POST, PUT, PATCH e DELETE**.

> Também é possível testar a API utilizando ferramentas como Postman ou Insomnia.

---

## 📌 Rotas da API

### 🔹 Listar usuários

**GET** `/usuarios`

---

### 🔹 Buscar usuário por ID

**GET** `/usuarios/:id`

---

### 🔹 Criar usuário

**POST** `/usuarios`

**Body (JSON):**

```json
{
  "nome": "Carlos Oliveira",
  "email": "carlos@email.com",
  "idade": 32
}
```

---

### 🔹 Atualizar todos os dados do usuário

**PUT** `/usuarios/:id`

**Body (JSON):**

```json
{
  "nome": "Marcos",
  "email": "marcos@email.com",
  "idade": 30
}
```

---

### 🔹 Atualizar dados específicos do usuário

**PATCH** `/usuarios/:id`

**Body (JSON):**

```json
{
  "email": "novo@email.com"
}
```

---

### 🔹 Remover usuário

**DELETE** `/usuarios/:id`

---

## 📊 Status HTTP utilizados

* **200** – Sucesso
* **201** – Recurso criado
* **400** – Erro de validação
* **404** – Recurso não encontrado

---

## 👨‍💻 Heitor Sepulcri

Projeto desenvolvido para fins de estudo e evolução em desenvolvimento backend com Node.js e Express.
