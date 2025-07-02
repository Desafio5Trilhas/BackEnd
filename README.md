
# 📚 Plataforma Educacional – EducaMA (Back-end)

## 🎯 Objetivo

Este back-end fornece os serviços de autenticação, gerenciamento de usuários, aulas, progresso e categorias de uma plataforma educacional que visa melhorar o acesso à educação em comunidades com baixo IDH no Maranhão. A API é desenvolvida com **Node.js**, **Express**, **Prisma** e **PostgreSQL** (Railway).

---

## 🚀 Tecnologias

- Node.js
- Express.js
- PostgreSQL (hospedado na [Railway](https://railway.com))
- Prisma ORM
- JWT para autenticação
- Docker (para ambiente local opcional)
- Documentação da API em Markdown (`docs/API_EducaMA_Documentacao.md`)

---

## 🏁 Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/Desafio5Trilhas/BackEnd.git
cd BackEnd
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

```env
DATABASE_URL=postgresql://seu_usuario:senha@host:porta/db
JWT_SECRET=sua_chave_secreta
```

> A `DATABASE_URL` pode ser obtida direto da Railway após criar o banco PostgreSQL.

### 4. Rodar as migrações

```bash
npx prisma migrate dev --name init
```

### 5. Gerar o Prisma Client

```bash
npx prisma generate
```

### 6. Rodar o servidor

```bash
npm run dev
```

> O servidor iniciará em: `http://localhost:3000`

---

## 🔧 Estrutura de Pastas

```plaintext
/src
├── routes/               → Endpoints da API
├── controllers/          → Entrada/saída das requisições
├── services/             → Regras de negócio
├── repositories/         → Acesso ao banco de dados
├── middlewares/          → Autenticação e autorização
├── prisma/               → Modelos e configurações do banco
├── prismaClient.js       → Instância do Prisma Client
├── docs/                 → Documentação da API
└── index.js              → Inicia o servidor Express
```

---

## 📂 Endpoints da API

> Todos os detalhes estão documentados em [`docs/API_EducaMA_Documentacao.md`](docs/API_EducaMA_Documentacao.md)

### 👤 Usuário
- `POST /user/cadastro` – Cadastro
- `POST /user/login` – Login
- `GET /user/me` – Buscar usuário logado

### 📚 Aulas
- `POST /aulas` – Criar aula *(apenas tutor/admin)*
- `GET /aulas` – Listar todas
- `GET /aulas/:id` – Aula por ID

### 🏷️ Categorias
- `POST /categorias` – Criar *(apenas admin)*
- `GET /categorias` – Listar todas
- `GET /categorias/:id` – Buscar por ID

### 📈 Progresso
- `POST /progresso` – Marcar aula como concluída
- `GET /progresso` – Buscar progresso do usuário

---

## 🛡️ Segurança e Autenticação

- **JWT Token**: todas as rotas protegidas exigem o header:
  ```
  Authorization: Bearer <token>
  ```

- **Perfis de usuário**:
  - `aluno`: apenas visualiza aulas
  - `tutor`: cria aulas
  - `admin`: gerencia usuários e categorias

---

## 🐘 Banco de Dados

- Utiliza **PostgreSQL**
- Gerenciado com **Prisma**
- Deploy realizado via **Railway**

---

## 🧠 Recomendações

- Use ferramentas como **Insomnia** ou **Postman** para testar os endpoints.
- Sempre proteja suas rotas com o middleware de autenticação.
- Para testes automatizados, considere usar `Jest` e `supertest`.

---

## 🧑‍💻 Time EducaMA

- Leonardo Ferreira – Back-end
- Abnadab Martins Castro – Back-end
- Rayan Batista Silva – Back-end
- [Outros nomes do time...]
