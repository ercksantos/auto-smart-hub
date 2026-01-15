# 🚗 Auto Smart Hub

<div align="center">

**Plataforma de Automação e Gestão Inteligente para Concessionárias**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

---

## 📋 Sobre o Projeto

**Auto Smart Hub** é uma solução completa para automatização do atendimento e gestão de concessionárias utilizando Inteligência Artificial. A plataforma oferece uma landing page moderna e responsiva que apresenta todas as funcionalidades do sistema.

### 🎯 Principais Recursos

- 🤖 **Atendimento Automatizado com IA**
- 📊 **Gestão Completa de Vendas e Estoque**
- 📱 **Design Responsivo e Moderno**
- ⚡ **Performance Otimizada**
- 🎨 **Interface Intuitiva com Componentes Reutilizáveis**
- 🔒 **Páginas de Conformidade (LGPD, Privacidade, Termos de Serviço)**

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[React 18.3.1](https://reactjs.org/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript 5.6.2](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite 6.0.5](https://vitejs.dev/)** - Build tool e dev server ultrarrápido

### Estilização
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis e acessíveis
- **[Radix UI](https://www.radix-ui.com/)** - Primitivas UI de baixo nível

### Gerenciamento de Estado e Formulários
- **[TanStack Query 5.83.0](https://tanstack.com/query/)** - Data fetching e cache
- **[React Hook Form 7.54.2](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod 3.24.1](https://zod.dev/)** - Validação de schemas TypeScript-first

### Utilitários
- **[Lucide React](https://lucide.dev/)** - Ícones SVG
- **[date-fns](https://date-fns.org/)** - Manipulação de datas
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carrossel de imagens

### Testing
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários
- **[Testing Library](https://testing-library.com/)** - Utilitários para testes

---

## 📁 Estrutura do Projeto

```
auto-smart-hub/
├── public/              # Arquivos estáticos
│   ├── robots.txt
│   └── avatars/        # Imagens de avatares
├── src/
│   ├── components/     # Componentes React
│   │   ├── landing/   # Componentes da landing page
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ProblemsSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── ...
│   │   └── ui/        # Componentes UI (shadcn/ui)
│   ├── pages/         # Páginas da aplicação
│   │   ├── Index.tsx
│   │   ├── LGPD.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── NotFound.tsx
│   ├── hooks/         # Custom React Hooks
│   ├── lib/           # Utilitários e helpers
│   ├── test/          # Arquivos de teste
│   └── main.tsx       # Ponto de entrada da aplicação
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** ou **bun** - Gerenciador de pacotes

### Instalação

1. **Clone o repositório**

```bash
git clone <URL_DO_REPOSITORIO>
cd auto-smart-hub
```

2. **Instale as dependências**

```bash
# Usando npm
npm install

# Usando yarn
yarn install

# Usando bun
bun install
```

3. **Inicie o servidor de desenvolvimento**

```bash
# Usando npm
npm run dev

# Usando yarn
yarn dev

# Usando bun
bun dev
```

4. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

---

## 📜 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Compilar em modo desenvolvimento
npm run build:dev

# Pré-visualizar build de produção
npm run preview

# Executar linter
npm run lint

# Executar testes
npm run test

# Executar testes em modo watch
npm run test:watch
```

---

## 🎨 Componentes Principais

### Landing Page Sections

- **HeroSection** - Seção principal com CTA
- **ProblemsSection** - Problemas que a solução resolve
- **FeaturesSection** - Funcionalidades do sistema
- **HowItWorksSection** - Como funciona o processo
- **ScreenshotsSection** - Capturas de tela do sistema
- **BenefitsSection** - Benefícios da plataforma
- **TestimonialsSection** - Depoimentos de clientes
- **ContactSection** - Formulário de contato
- **FAQSection** - Perguntas frequentes

### UI Components (shadcn/ui)

Mais de 40 componentes UI reutilizáveis incluindo:
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Tables, Tabs, Tooltips
- Accordions, Alerts, Badges
- E muito mais...

---

## 🧪 Testes

O projeto utiliza Vitest para testes unitários:

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch
```

---

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Opções de Deploy

- **Vercel** - Recomendado para projetos React/Vite
- **Netlify** - Fácil configuração e deploy contínuo
- **GitHub Pages** - Hospedagem gratuita
- **AWS S3 + CloudFront** - Escalável e profissional

---

## 📝 Páginas Legais

O projeto inclui páginas de conformidade legal:

- **LGPD** - Política de proteção de dados (LGPD)
- **Política de Privacidade** - Como tratamos dados dos usuários
- **Termos de Serviço** - Condições de uso da plataforma

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Autores

**Erick** - Desenvolvedor Principal

---

## 📞 Suporte

Para suporte, entre em contato através do formulário de contato na landing page ou abra uma issue no repositório.

---

<div align="center">

**Feito com ❤️ para revolucionar o atendimento em concessionárias**

⭐ Não esqueça de dar uma estrela no projeto!

</div>
