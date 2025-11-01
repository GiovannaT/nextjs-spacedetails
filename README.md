# 🏗️ App Patriani

Sistema de gestão e acompanhamento de empreendimentos imobiliários.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat&logo=tailwind-css)

## 📋 Sobre o Projeto

Aplicação web moderna desenvolvida para gerenciar e visualizar informações detalhadas de empreendimentos imobiliários.

## ✨ Funcionalidades

- 📊 **Dashboard Interativo**: Visualização de dados com gráficos dinâmicos
- 🏘️ **Gestão de Empreendimentos**: Informações detalhadas sobre cada projeto
- 📈 **Estatísticas em Tempo Real**: Acompanhamento de unidades vendidas, reservadas e disponíveis
- 🖼️ **Galeria de Imagens**: Visualização ampliada de fotos dos empreendimentos
- 📱 **Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- 🌓 **Dark Mode**: Tema escuro automático baseado nas preferências do sistema
- ⚡ **Performance Otimizada**: Construído com Next.js 16 e React 19

## 🚀 Tecnologias

### Core
- **[Next.js 16.0.1](https://nextjs.org/)** - Framework React com SSR e otimizações automáticas
- **[React 19.2.0](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Framework CSS utility-first
- **CSS Variables** - Sistema de cores customizado com suporte a dark mode
- **Responsive Design** - Breakpoints: mobile (320px+), tablet (640px+), desktop (1024px+)

### Visualização de Dados
- **[Recharts 3.3.0](https://recharts.org/)** - Biblioteca para gráficos interativos
  - Gráficos de pizza (Pie Charts)
  - Gráficos com formas ativas
  - Animações suaves

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS & Autoprefixer** - Processamento e compatibilidade CSS

## 📦 Instalação

### Pré-requisitos
- Node.js 20.x ou superior
- pnpm (recomendado) ou npm

### Passos

1. Clone o repositório
```bash
git clone <repository-url>
cd app-patriani
```

2. Instale as dependências
```bash
pnpm install
# ou
npm install
```

3. Execute o servidor de desenvolvimento
```bash
pnpm dev
# ou
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
pnpm dev        # Inicia o servidor de desenvolvimento
pnpm build      # Cria build de produção
pnpm start      # Inicia o servidor de produção
pnpm lint       # Executa o linter
```

## 📁 Estrutura do Projeto

```
app-patriani/
├── public/
│   ├── assets/          # Imagens dos empreendimentos
│   └── data/
│       └── space.json   # Dados dos empreendimentos
├── src/
│   └── app/
│       ├── components/  # Componentes React reutilizáveis
│       │   ├── Buttons/
│       │   ├── Charts/  # Componentes de gráficos
│       │   ├── CardsList.tsx
│       │   ├── ContentGrid.tsx
│       │   ├── DataCard.tsx
│       │   ├── DetailsCard.tsx
│       │   ├── ImageCard.tsx
│       │   ├── ImageHeader.tsx
│       │   ├── Label.tsx
│       │   ├── Modal.tsx
│       │   ├── Nav.tsx
│       │   ├── PageLayout.tsx
│       │   ├── SpaceLayout.tsx
│       │   ├── SpaceTitle.tsx
│       │   └── Title.tsx
│       ├── styles/
│       │   └── icons/   # Ícones customizados SVG
│       ├── globals.css  # Estilos globais e variáveis
│       ├── layout.tsx   # Layout raiz da aplicação
│       └── page.tsx     # Página principal
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Componentes Principais

### Cards de Dados
- **DataCard**: Exibe métricas com ícones (compradores, eventos, documentos)
- **DetailsCard**: Card expandido com informações detalhadas
- **ImageCard**: Card de imagem com hover e modal

### Gráficos
- **ActiveShapePieChart**: Gráfico de pizza interativo com legenda
- **SimplePieChart**: Gráfico circular simples para porcentagens

### Layout
- **Modal**: Sistema de modal reutilizável com variantes de tamanho
- **Nav**: Barra de navegação fixa com informações do projeto
- **SpaceLayout**: Container com padding responsivo

## 🎯 Features Implementadas

### Responsividade Completa
- ✅ Mobile First Design
- ✅ Breakpoints otimizados (sm, md, lg, xl)
- ✅ Grid system adaptável
- ✅ Imagens responsivas com Next/Image
- ✅ Tipografia escalável
- ✅ Touch-friendly em dispositivos móveis

### Dark Mode
- ✅ Detecção automática via `prefers-color-scheme`
- ✅ Variáveis CSS customizadas para temas
- ✅ Transições suaves entre temas
- ✅ Contraste otimizado WCAG
- ✅ Cores da marca preservadas