
# ImpCourse

ImpCourse é uma plataforma de cursos online voltada para fins acadêmicos, desenvolvida para a faculdade Impacta. O projeto visa fornecer um sistema de gerenciamento de cursos com funcionalidades como cadastro de usuários, login, gerenciamento de cursos, aulas e conteúdos.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Next.js**: Framework para renderização server-side e páginas dinâmicas.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework para estilização da aplicação com classes utilitárias.
- **Context API**: Gerenciamento de estado para contextos específicos dentro da aplicação.
- **Axios**: Biblioteca para fazer requisições HTTP. Axios facilita a comunicação com a API, permitindo enviar e receber dados do servidor de forma eficiente e segura, com suporte a interceptadores, autenticação e tratamento de erros.

## Estrutura do Projeto

```
/src - Raiz do projeto
│── /app - Diretório principal do Next.js (App Router)
│   ├── layout.tsx - Layout global da aplicação
│   ├── page.tsx - Página inicial
│
├── /components - Componentes reutilizáveis
│
├── /hooks - Hooks customizados
│
├── /lib - Código auxiliar e utilitários
│
├── /services - Serviços que acessam a API ou banco de dados
│
├── /store - Configuração do Redux
│
├── /styles - Estilos globais
│
/tests - Testes da aplicação
```

## Funcionalidades

- **Cadastro de Usuários**: Permite que os usuários se registrem na plataforma.
- **Login de Usuários**: Autenticação via JWT para acesso seguro.
- **Cadastro de Cursos**: Usuários podem criar e gerenciar cursos.
- **Edição de Cursos**: Alteração de informações de cursos existentes.
- **Cadastro de Aulas**: Criação de aulas dentro de cursos.
- **Listagem de Cursos**: Exibição de cursos disponíveis para os usuários.
- **Acesso e Compra de Cursos**: Funcionalidade de compra e acesso ao conteúdo de cursos.

## Como Rodar o Projeto

### Passos de Instalação e Inicialização

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/imp-course.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd imp-course
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como a configuração do banco de dados.

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação no navegador em:

   ```
   http://localhost:3000
   ```

<!-- ## Testes

Para rodar os testes da aplicação, execute o seguinte comando: -->

<!-- ```bash
npm run test
``` -->
