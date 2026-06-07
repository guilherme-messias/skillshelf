# Skillshelf

Plataforma web para organizar estudos e evolução profissional por meio de uma estante de conteúdos (cursos, materiais e anotações), com foco em produtividade e aprendizado contínuo.

Este projeto foi desenvolvido como estudo prático de backend em PHP com arquitetura em camadas, priorizando estrutura limpa, separação de responsabilidades e base pronta para evoluir.

## Visão de Produto

O Skillshelf resolve um problema comum: conteúdos de estudo ficam espalhados em várias plataformas e notas desconectadas. A proposta é centralizar tudo em um único lugar, permitindo:

- catalogar conteúdos de aprendizado;
- visualizar detalhes de cada item;
- registrar anotações por conteúdo;
- acompanhar melhor o histórico de estudo.

## Destaques para Portfólio

- Arquitetura inspirada em MVC, com separação clara entre controllers, models e views.
- Estrutura web segura com ponto de entrada público isolado na pasta public.
- Fluxo completo de CRUD para itens de conteúdo.
- Sistema de autenticação com páginas dedicadas de login, registro e logout.
- Camada de abstração de banco com classe Database centralizando acesso a dados.
- Organização de projeto pronta para crescimento incremental.

## Stack e Ferramentas

- PHP
- SQLite (arquivo local de banco)
- HTML/CSS + Tailwind CSS
- ESLint + Prettier (incluindo plugin de PHP) para padronização de código

## Arquitetura

```text
public/                 # único diretório exposto ao navegador
controllers/            # regras de fluxo da aplicação
models/                 # entidades e acesso a dados
views/                  # templates e páginas
config.php              # configurações gerais
Database.php            # conexão/acesso ao banco
routes.php              # mapeamento de rotas
functions.php           # helpers utilitários
Validations.php         # validações de entrada
Flash.php               # mensagens temporárias de feedback
```

## Segurança

- Apenas arquivos dentro de public ficam expostos ao navegador.
- Regras de servidor (.htaccess) protegem diretórios sensíveis e arquivos de configuração.
- Estrutura favorece manutenção e minimiza risco de exposição acidental de código interno.

## Funcionalidades Implementadas

- Página inicial com listagem de conteúdos.
- Cadastro de novos itens de conteúdo.
- Página de detalhes por item.
- Registro de notas do usuário por item.
- Fluxo de autenticação de usuário.

## Como Rodar Localmente

Pré-requisitos:

- PHP 8+
- Node.js (opcional, para lint e formatação)

1. Clone o repositório e acesse a pasta do projeto.
2. Inicie o servidor PHP apontando para a pasta public:

```bash
php -S 127.0.0.1:8000 -t public
```

3. Abra no navegador:

```text
http://127.0.0.1:8000
```

Comandos úteis de qualidade de código:

```bash
npm install
npm run lint
npm run format
```

## Autor

Projeto desenvolvido por Guilherme Messias como peça de portfólio para demonstrar capacidade em:

- modelagem de aplicação web em PHP;
- organização de código escalável;
- implementação de funcionalidades completas do backend ao frontend.
