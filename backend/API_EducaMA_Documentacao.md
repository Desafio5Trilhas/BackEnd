
# 📚 API - Plataforma Educacional EducaMA

## 🔗 URL Base
```
a ser feito o deploy, mas um exemplo seria: https://educama-api.onrender.com
```

---

## ✅ Autenticação

A API usa autenticação via **JWT**. Após o login, inclua o token nos headers:

```
Authorization: Bearer <token>
```

---

## 📌 Endpoints

### 👤 Usuários

#### POST `/user/cadastro`
**Descrição:** Cadastra um novo usuário.

**Body:**
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta:**
```json
{
  "message": "Usuário cadastrado com sucesso!",
  "user": {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com",
    "tipoUsuario": "aluno"
  }
}
```

---

#### POST `/user/login`
**Descrição:** Realiza login e retorna um token JWT.

**Body:**
```json
{
  "email": "joao@email.com",
  "senha": "123456"
}
```

**Resposta:**
```json
{
  "message": "Login realizado com sucesso!",
  "token": "<jwt_token>"
}
```

---

#### GET `/user/me` 🔒
**Descrição:** Retorna informações do usuário autenticado.

**Headers:**
```
Authorization: Bearer <token>
```

---

#### PUT `/user/:id/promover` 🔒 (Admin)
**Descrição:** Promove o usuário para tutor ou admin.

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "tipoUsuario": "tutor"
}
```

---

### 📂 Categorias

#### POST `/categorias` 🔒 (Admin)
**Descrição:** Cria uma nova categoria.

**Body:**
```json
{
  "nome": "Matemática",
  "descricao": "Aulas de matemática básica e avançada."
}
```

---

#### GET `/categorias`
**Descrição:** Lista todas as categorias.

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Matemática",
    "descricao": "Aulas de matemática básica e avançada."
  }
]
```

---

### 🎥 Aulas

#### POST `/aulas` 🔒 (Tutor/Admin)
**Descrição:** Cadastra uma nova aula.

**Headers:**
```
Authorization: Bearer <token>
```

**Body:**
```json
{
  "titulo": "Funções do 1º grau",
  "descricao": "Explicação básica com exemplos",
  "linkYoutube": "https://youtube.com/watch?v=abc123",
  "categoriaId": 1
}
```

---

#### GET `/aulas`
**Descrição:** Lista todas as aulas.

---

#### GET `/aulas/:id`
**Descrição:** Busca uma aula específica pelo ID.

---

### 📈 Progresso

#### POST `/progresso` 🔒 (Aluno)
**Descrição:** Registra progresso de aula assistida.

**Body:**
```json
{
  "aulaId": 5
}
```

---

#### GET `/progresso` 🔒
**Descrição:** Lista progresso do usuário logado.

---

## 🔐 Regras de Acesso

| Ação                  | Acesso permitido         |
|-----------------------|--------------------------|
| Cadastro              | Público                  |
| Login                 | Público                  |
| Ver perfil (`/me`)    | Logado                   |
| Promover usuário      | Admin                    |
| Criar categoria       | Admin                    |
| Criar aula            | Tutor, Admin             |
| Marcar progresso      | Aluno                    |

---

## 📦 Requisitos Atendidos

- ✅ APIs RESTful
- ✅ Autenticação JWT
- ✅ Estrutura modular em `/src`
- ✅ Deploy (Render/Railway)
- ✅ Documentação da API (Markdown)
- ✅ Segurança por perfis e JWT
- ✅ Gerenciamento de progresso e aulas
