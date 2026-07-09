# 🚀 Fernando Fontes Hipólito | Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)

> **"Criando o futuro da web moderna."**

Este repositório contém o código-fonte do meu portfólio profissional, desenvolvido com foco em **performance**, **acessibilidade** e **Visual Premium**. O projeto serve como uma demonstração prática das minhas habilidades como **Full Stack Developer** (atualmente na Suzano SA), utilizando as tecnologias mais recentes do ecossistema React.

## ✨ Destaques Técnicos

O projeto foi arquitetado para impressionar não apenas visualmente, mas também tecnicamente:

- **🤖 Fezinho AI Agent**: Um assistente virtual integrado diretamente no portfólio. Desenvolvido com **Vercel AI SDK** e alimentado pelo modelo **Google Gemini (2.5 Flash)**, o "Fezinho" responde perguntas sobre minhas habilidades, trajetória profissional e projetos do GitHub usando contexto dinâmico em tempo real.
- **🌍 Internacionalização (i18n)**: Arquitetura bilíngue (Inglês e Português), garantindo que todo conteúdo — incluindo a comunicação do chatbot — se adapte perfeitamente ao idioma preferido do usuário.
- **⚡ Next.js 15 (App Router)**: Utilizando a arquitetura de Server Components para máxima performance e SEO.
- **🎨 Tailwind CSS v4 & Design System**: Implementação de um tema "Dark Premium" com glassmorphism, gradientes e variáveis CSS nativas.
- **🔄 GitHub API Integration**: Os projetos exibidos não são estáticos; eles são **buscados em tempo real** da API do GitHub, garantindo que o portfólio esteja sempre atualizado com meus últimos códigos.
- **✨ Framer Motion**: Animações fluidas e micro-interações que elevam a experiência do usuário (UX).
- **📱 Responsividade Total**: Layout adaptável ("Mobile First") testado em diversos dispositivos.
- **🧩 Componentização Modular**: Arquitetura limpa com componentes reutilizáveis (Cards, Buttons, Badges) seguindo padrões de mercado.

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia |
|-----------|------------|
| **Core** | Next.js 15, React 19, TypeScript |
| **Inteligência Artificial** | Google Gemini (2.5 Flash), Vercel AI SDK |
| **Estilização** | Tailwind CSS v4, CSS Variables |
| **Animação** | Framer Motion |
| **Internacionalização** | i18n nativo do Next.js (App Router) |
| **Ícones** | Lucide React |
| **Integração** | GitHub REST API |

## 🚀 Como Rodar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/FFHipolito/portfolio-fernandofh.git
   ```

2. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto com as chaves necessárias:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   # Opcional: GITHUB_TOKEN para aumentar o limite da API do GitHub
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:3000`.

## 📂 Estrutura do Projeto

```
/
├── app/              # Next.js App Router (Pages, Layout, i18n & API Routes)
├── components/       # UI Components & Widget do FezinhoChat
├── dictionaries/     # Arquivos de Internacionalização (pt, en)
├── lib/              # Utilities, GitHub fetcher & AI Context Builder
└── public/           # Static Assets
```

---

Feito com 💜 e código limpo por **Fernando Fontes Hipólito**.
[LinkedIn](https://linkedin.com/in/fernando-hipólito) • [Email](mailto:fernandofhipolito@gmail.com)
