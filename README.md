## 📝 Resumo do Projeto – Criação de Tarefas (Back-End)
Este repositório contém o back-end de uma aplicação de gerenciamento de tarefas, desenvolvido em Node.js com TypeScript, utilizando Express como framework HTTP e Prisma ORM para acesso ao banco de dados.

A aplicação fornece uma API RESTful para criar, listar, atualizar e excluir tarefas, sendo ideal para um sistema de to-do list ou para gerenciar tarefas em projetos mais complexos.

## 📦 Tecnologias e Bibliotecas Utilizadas

| Camada          | Tecnologias/Bibliotecas            |
| --------------- | ---------------------------------- |
| Linguagem       | TypeScript                         |
| Framework Web   | Express                            |
| ORM             | Prisma + @prisma/client            |
| Banco de Dados  | PostgreSQL (assumido via Prisma)   |
| Ferramentas Dev | tsx (para live reload), typescript |
| Tipagem         | @types/express                     |

## 🧠 Funcionalidades da API
🔹 GET /tarefas: Lista todas as tarefas

🔹 POST /tarefas: Cria uma nova tarefa

🔹 PUT /tarefas/:id: Atualiza uma tarefa existente

🔹 DELETE /tarefas/:id: Remove uma tarefa

As rotas estão organizadas no diretório routes/, com o Prisma fazendo interface direta com o banco via schema.prisma.
