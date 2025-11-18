# EFood — Documentação do estado atual

Resumo
- Projeto React criado com Vite.
- Styled-components para estilos e react-router-dom para rotas.
- Objetivo: layout de um app de pedidos (hero/header, lista de restaurantes, detalhe de restaurante, footer).

Como rodar
1. Instalar dependências:
   npm install
2. Rodar em desenvolvimento:
   npm run dev
3. Build de produção:
   npm run build
4. Visualizar build:
   npm run preview

Stack
- React + Vite
- styled-components
- react-router-dom
- TypeScript (se aplicável)

Estrutura principal (visão geral)
src/
  components/
    Footer/
      index.tsx        ← componente Footer (estilos em style.ts)
      style.ts         ← estilos do Footer (fornecido)
    HeaderHome/        ← header da Home (imagem enviada)
      index.tsx
      style.ts
    HeaderRestaurant/  ← header da página de restaurante (imagem enviada)
      index.tsx
      style.ts
    ...outros components...
  styles/
    styles.ts          ← GlobalCSS, Container, cores e helpers (referenciado)
  routes/
    index.tsx or Rotas.tsx ← configuração de rotas (referenciado como Rotas)
  App.tsx              ← ponto de entrada do app (fornecido)
  assets/              ← imagens (logo, fundo, ícones)
  README.md            ← este arquivo

Componentes já identificados (a partir do que você compartilhou)
- Footer
  - Arquivo: src/components/Footer/style.ts (contém FooterWrapper, SocialMedia, TextFooter)
  - Uso: footer com background, logo e redes sociais (gap aplicado no SocialMedia).
- HeaderHome
  - Header com logo centralizada e texto grande (hero).
- HeaderRestaurant
  - Header menor para página de restaurante, compartilha elementos com HeaderHome (logo e background).

Observações técnicas e boas práticas aplicadas / recomendadas
- Reaproveitamento de estilos: criar um HeaderBase (styled-components) ou mixin com css do styled-components para regras compartilhadas (background, centralização).
- Uso de css helper:
  import styled, { css } from "styled-components";
  Permite criar blocos reutilizáveis e condicionais.
- Gap em flex containers:
  - use gap: 8px; no container flex (funciona na maioria dos navegadores modernos).
  - fallback: margem nos itens para suporte legado.
- Organização:
  - Manter styles compartilhados em src/styles/styles.ts (cores, Container, GlobalCSS).
  - Estender componentes estilizados: styled(HeaderBase) para variações específicas.

