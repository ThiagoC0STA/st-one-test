# 🌍 Local Menu Hierarchy

Este projeto é uma interface web que consome um JSON de locais e exibe as informações como um menu hierárquico ordenado, respeitando as relações de parentesco. Foi desenvolvido utilizando **React** e **TypeScript** com estilização através de **Tailwind CSS**.

## 🚀 Iniciando o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode verificar se o Node.js está instalado executando:

node -v

Se o Node.js não estiver instalado, você pode baixá-lo [aqui](https://nodejs.org/).

### Passo a Passo

1. **Clone o repositório:**
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. **Instale as dependências:**

   Dentro do diretório do projeto, execute:

   npm install

3. **Inicie o servidor de desenvolvimento:**

   Execute o comando abaixo para iniciar o projeto em modo de desenvolvimento:

   npm run dev

4. **Acesse a aplicação:**
   Abra seu navegador e acesse:

   http://localhost:3000

## 📚 Documentação

### Funcionalidade Principal

A aplicação é composta por um menu que exibe uma lista hierárquica de locais. Quando um local é clicado, sua descrição é exibida no painel principal.

- **Hierarquia dos Locais:** A função \`buildHierarchy\` organiza os locais em uma estrutura hierárquica com base no campo \`parent\`.
- **Dark Mode:** A interface é projetada em Dark Mode para uma experiência visual agradável.
- **Responsividade:** A aplicação é completamente responsiva e funciona bem em diferentes tamanhos de tela.

### Componentes Principais

- **Page.tsx**: Este é o componente principal que contém toda a lógica de renderização do menu e exibição de detalhes do local selecionado.

  - **buildHierarchy:** Função responsável por organizar a estrutura de locais em uma hierarquia.

  - **renderMenu:** Função que renderiza o menu hierárquico de forma recursiva, garantindo que os locais filhos sejam corretamente aninhados.

### Estilização

O projeto utiliza **Tailwind CSS** para a estilização, garantindo um design moderno e responsivo com foco na experiência em Dark Mode.

### Melhorias Futuras

- **Funcionalidade de Busca:** Implementar uma barra de pesquisa para filtrar locais por nome.
- **Testes Unitários:** Adicionar testes para garantir a robustez do código.
- **Expansão/Colapso de Itens:** Melhorar a usabilidade do menu com ícones de expansão e colapso para itens com filhos.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e responsiva.

## 🙏 Agradecimentos

Agradecimento especial à ST-One pelo suporte e inspiração no desenvolvimento deste projeto.
