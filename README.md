# ResolveAí MVP

Base real de produto para marketplace local de serviços, construída com **Next.js App Router + TypeScript + Tailwind + Supabase**.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase (`@supabase/supabase-js` + `@supabase/ssr`)
- Deploy preparado para Vercel

## Estrutura
```txt
src/
  app/
  components/
    ui/ layout/ landing/ client/ provider/ admin/ shared/
  hooks/
  lib/
    supabase/ auth/ utils/ validations/ constants/ formatters/
  services/
  types/
  styles/
```

## Áreas e rotas
- Pública: `/`, `/como-funciona`, `/categorias`, `/seja-prestador`, `/faq`, `/login`, `/cadastro`
- Cliente: `/cliente/*`
- Prestador: `/prestador/*`
- Admin: `/admin/*`

## Setup
1. Copie `.env.example` para `.env.local`.
2. Instale dependências:
   ```bash
   npm install
   ```
3. Rode em dev:
   ```bash
   npm run dev
   ```

## Segurança e papéis
- `middleware.ts` protege rotas privadas via sessão Supabase (`auth.getUser()` + role em `profiles`).
- Estrutura pronta para substituir mock por sessão real Supabase Auth.

## Próximos passos recomendados
- Conectar formulários a actions/server routes.
- Implementar autenticação Supabase completa.
- Substituir mocks por consultas reais aos repositórios.
- Adicionar testes unitários e E2E.
