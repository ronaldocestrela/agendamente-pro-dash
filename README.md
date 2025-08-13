# SoEstética - Dashboard Web

Sistema de gestão para salão de beleza e estética, desenvolvido com React, TypeScript e tecnologias modernas.

## 🚀 Funcionalidades

### 🔐 Autenticação
- **Login** - Sistema de autenticação com email e senha
- **Registro** - Cadastro de novos usuários
- **Proteção de Rotas** - Apenas usuários autenticados podem acessar o dashboard

### 📊 Dashboard Principal
- **Métricas em Tempo Real** - Agendamentos do dia, pendentes, concluídos e cancelados
- **Lista de Agendamentos** - Visualização dos próximos agendamentos com status
- **Ações Rápidas** - Botões para funções frequentes (novo agendamento, calendário, etc.)
- **Widget de Calendário** - Visualização rápida de datas

### 👥 Gestão de Clientes
- **Lista de Clientes** - Visualização completa da base de clientes
- **Busca e Filtros** - Sistema de busca por nome, email ou telefone
- **Informações Detalhadas** - Email, telefone, endereço e histórico de serviços
- **Cadastro de Novos Clientes** - Formulário para adicionar clientes

### 🛠️ Gestão de Serviços
- **Catálogo de Serviços** - Lista completa dos serviços oferecidos
- **Categorização** - Organização por categorias (Limpeza, Elétrica, Jardinagem, etc.)
- **Informações Detalhadas** - Descrição, duração e preço de cada serviço
- **Estatísticas** - Total de serviços e preço médio
- **Busca e Filtros** - Sistema de busca e filtros por categoria

### 📦 Gestão de Produtos
- **Controle de Estoque** - Visualização e gestão de produtos
- **Estatísticas de Produtos** - Total de produtos, valor do estoque, etc.
- **Categorização** - Organização por categorias de produtos

### 🎨 Interface e UX
- **Design Responsivo** - Adaptado para desktop, tablet e mobile
- **Sidebar Colapsável** - Menu lateral que pode ser recolhido
- **Tema Moderno** - Interface clean com components shadcn/ui
- **Animações Suaves** - Transições e animações para melhor experiência
- **Menu Mobile** - Interface otimizada para dispositivos móveis

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router v7** - Roteamento
- **TanStack Query** - Gerenciamento de estado e cache

### UI/UX
- **shadcn/ui** - Componentes de interface
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Primitivos de interface
- **Lucide React** - Ícones
- **Recharts** - Gráficos e visualizações

### Formulários e Validação
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **Hookform Resolvers** - Integração entre RHF e Zod

### Outras Ferramentas
- **Axios** - Cliente HTTP
- **Date-fns** - Manipulação de datas
- **Sonner** - Sistema de notificações
- **Class Variance Authority** - Variantes de classes CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação Local

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre no diretório
cd soestetica-web

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Usando Docker

```bash
# Execute com Docker Compose
docker compose up -d

# Ou apenas build
docker compose up -d --build
```

O aplicativo estará disponível em `http://localhost:3030`

## 📝 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Build para produção
npm run build:dev    # Build em modo desenvolvimento
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── dashboard/      # Componentes específicos do dashboard
│   ├── layout/         # Layout components (Sidebar, Header)
│   └── ui/            # Componentes base do shadcn/ui
├── hooks/             # Custom hooks
├── lib/               # Utilitários e configurações
│   ├── api/           # Configuração de API
│   ├── hooks/         # Hooks de negócio
│   ├── schemas/       # Esquemas de validação
│   ├── store/         # Gerenciamento de estado
│   ├── types/         # Definições de tipos
│   └── utils.ts       # Funções utilitárias
├── pages/             # Páginas da aplicação
└── routes/            # Configuração de rotas
```

## 🔐 Autenticação

O sistema implementa autenticação baseada em cookies com:
- Rotas protegidas que redirecionam para login
- Validação de sessão automática
- Logout com limpeza de estado
- Páginas públicas apenas para login e registro

## 🎨 Temas e Estilização

- **Design System** baseado em shadcn/ui
- **Gradientes modernos** e efeitos visuais
- **Animações CSS** customizadas
- **Responsividade** completa
- **Modo escuro/claro** (configurável)

## 📱 Responsividade

- **Mobile First** - Interface otimizada para mobile
- **Breakpoints** - sm, md, lg, xl
- **Menu Mobile** - Sidebar colapsável em telas pequenas
- **Cards Responsivos** - Layout adaptativo dos componentes

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
