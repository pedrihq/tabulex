# 🧮 Tabulex - Front-End

Este é o **front-end** do projeto **Tabulex**, desenvolvido em **Next.js** por Pedro Henrique. A aplicação tem foco em exibir e gerenciar dados de forma clara e organizada, utilizando componentes modernos e validações robustas.

> ⚙️ Para funcionamento completo, este projeto depende da API disponível no repositório [Tabulex - Back-End](https://github.com/pedrihq/tabulex-back) (ou ajuste conforme o nome real do repositório).

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [Lucide React Icons](https://lucide.dev/)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/) – Validação de formulários

---

## 📦 Passo a Passo para Executar o Projeto

### 1. Clone o repositório
🔗 Back-End Necessário
Este front consome dados de uma API. Para que ele funcione corretamente, você precisa também clonar e executar o back-end:

👉 Repositório: Tabulex Back-End

  ```bash
  git clone https://github.com/pedrihq/tabulex.git
  cd tabulex
  npm install
  npm run dev
  Abra o navegador e acesse: http://localhost:3000
```````

Altere a `baseURL` para o endereço correto da API backend. Exemplo:

```ts

export const api = axios.create({
  baseURL: "http://125.148.0.06:8000",  // endereço do servidor backend
});

```
https://github.com/user-attachments/assets/5145b3e0-33cf-4496-b695-f010b6b02ec5



