# 📋 Taskboard - Gerenciador de Tarefas

## 🎯 Sobre o projeto

Aplicação Web **React + TypeScript** que permite gerenciar tarefas com prazos, filtros, busca e dashboard de produtividade. O Taskboard é voltado para estudantes e profissionais que precisam acompanhar trabalhos com prazos de entrega, oferecendo uma interface simples, responsiva e fácil de usar.

**Funcionalidades principais:**

* Adicionar novas tarefas.
* Visualizar detalhes de cada tarefa em modal.
* Marcar tarefas como concluídas.
* Filtrar tarefas por status ("Pendente" ou "Concluído").
* Buscar tarefas pelo título.
* Dashboard com métricas de tarefas da semana, atrasadas e concluídas.



## ⚙️ Tecnologias Utilizadas

* **Vite** — ferramenta de build rápida e leve, ideal para desenvolvimento React moderno.
* **React** — biblioteca principal para construção da interface.
* **TypeScript** — tipagem estática para maior segurança e consistência.
* **Tailwind CSS** — framework utilitário para estilização responsiva e rápida.



## 📦 Dependências Necessárias

* **Node.js** (versão 22 ou superior)
* **npm** ou **yarn**

Após clonar o repositório, instale as dependências executando:

```bash
npm install
# ou
yarn install
```



## ▶️ Como Rodar a Aplicação (Desenvolvimento)

```bash
npm run dev
# ou
yarn dev
```

O Vite exibirá o endereço local, geralmente:

```
http://localhost:5173/
```



## ⚠️ Desafios Enfrentados

* Garantir responsividade e experiência consistente em diferentes tamanhos de tela (mobile first).
* Implementar filtros combinados (status + busca) sem causar lentidão.



## ✅ Boas práticas aplicadas no projeto

* Componentização clara por funcionalidade (Dashboard, Tasklist, NewTask, Task, Filter).
* Tipagem completa com TypeScript para evitar inconsistências de dados.
* Responsividade total usando TailwindCSS (Mobile First).
* Persistência de dados via Local Storage.



## 🚀 Próximos Passos

* Implementar backend para persistência real (ex.: Firebase ou Node.js + banco de dados).
* Permitir edição de tarefas.
* Adicionar categorias filtráveis além de status.
* Notificações ou lembretes de tarefas próximas ou atrasadas.
* Melhorias de UI/UX, incluindo animações para adicionar/remover tarefas.



## 📎 Contribuição

Contribuições são bem-vindas! Abra issues para bugs ou sugestões, ou envie PRs.



## 🧩 Autor

Desenvolvido com 💻 e ☕ por **[João Reis]**
