# API REST de Usuários

API REST simples para gerenciamento de usuários, desenvolvida com **Node.js** e **Express**, aplicando os princípios do CRUD e boas práticas HTTP.

Este projeto foi criado com fins de estudo e portfólio, demonstrando o funcionamento das rotas **GET, POST, PUT, PATCH e DELETE**, organização em rotas e validações básicas.

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

---

## 📁 Estrutura do projeto

```
src/
 ├── routes/
 │    └── usuarios.routes.js
 ├── data/
 │    └── usuarios.js
 └── index.js
```

---

## ▶️ Como executar o projeto

1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências

```bash
npm install
```

3. Execute o servidor

```bash
node src/index.js
```

O servidor estará rodando em:

```
http://localhost:3000
```

---

## 📌 Rotas da API

### 🔹 Listar todos os usuários

**GET** `/usuarios`

---

### 🔹 Buscar usuário por ID

**GET** `/usuarios/:id`

---

### 🔹 Criar novo usuário

**POST** `/usuarios`

**Body (JSON):**

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "idade": 25
}
```

---

### 🔹 Atualizar todos os dados do usuário

**PUT** `/usuarios/:id`

**Body (JSON):**

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "idade": 26
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

## 🚀 Próximas melhorias

* Integração com banco de dados
* Criação de controllers
* Middleware de validação
* Documentação com Swagger
* Testes automatizados

---

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e evolução em desenvolvimento backend com Node.js.
