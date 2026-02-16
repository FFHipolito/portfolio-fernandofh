# 🚀 Guia de Deploy na Vercel

A maneira mais fácil e recomendada de colocar seu portfólio no ar é usando a **Vercel** (criadora do Next.js).

## Opção 1: Via GitHub (Recomendado)

Esta opção conecta seu repositório do GitHub à Vercel. Toda vez que você der um `git push`, o site atualiza automaticamente.

1. **Suba seu código para o GitHub** (se ainda não fez):
   - Crie um repositório novo no GitHub.
   - Rode no terminal:
     ```bash
     git add .
     git commit -m "Meu novo portfólio v1"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
     git push -u origin main
     ```

2. **Acesse a Vercel**:
   - Vá para [vercel.com](https://vercel.com) e faça login com seu GitHub.

3. **Importe o Projeto**:
   - Clique em **"Add New..."** -> **"Project"**.
   - Procure pelo repositório do seu portfólio e clique em **"Import"**.

4. **Configuração**:
   - Framework Preset: **Next.js** (já deve estar selecionado).
   - Root Directory: `./` (padrão).
   - Clique em **"Deploy"**.

5. **Pronto!** 
   - Em cerca de 1 minuto, seu site estará online. A Vercel te dará um link (ex: `seu-nome.vercel.app`).

---

## Opção 2: Via Vercel CLI (Direto do terminal)

Se você não quer usar o GitHub agora, pode subir direto do seu computador.

1. **Instale a CLI da Vercel**:
   ```bash
   npm i -g vercel
   ```

2. **Faça o login**:
   ```bash
   vercel login
   ```
   (Siga as instruções para logar com seu GitHub ou email).

3. **Deploy**:
   - Rode o comando na pasta do projeto:
     ```bash
     vercel
     ```
   - Responda as perguntas (pode dar Enter em tudo para usar o padrão):
     - Set up and deploy? [Y/n] **y**
     - Which scope? **(Seu nome)**
     - Link to existing project? [y/N] **n**
     - Project name? **portfolio-fernandofh**
     - Directory? **./**
     - Want to modify settings? [y/N] **n**

4. **Produção**:
   - O comando acima cria uma versão de "Preview". Para subir a versão final (Produção), rode:
     ```bash
     vercel --prod
     ```
