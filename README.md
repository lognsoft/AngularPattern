# Teste

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) na versão 16.2.4.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você modificar qualquer um dos arquivos de origem.

Para iniciar o servidor JSON, execute `npm run start-json`. Certifique-se de ter configurado e instalado as dependências necessárias para o servidor JSON. Para instalar globalmente o `json-server`, você pode executar o comando `npm install -g json-server`.

## Estrutura de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Executando Testes de Unidade

Execute `ng test` para executar os testes de unidade usando o [Karma](https://karma-runner.github.io).

## Executando Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end usando uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste end-to-end.

## Criação de novo componente
Conforme a estrutura do arquivo **"Gerenciamento de Módulos.pdf"**.

1. Para componentes que serão utilizados em diversos contextos, é fundamental criá-los na pasta **"Shared"**.

2. Ao criar um componente, ele será automaticamente adicionado ao módulo relativo ao diretório, por exemplo, se for criado na raiz do projeto ou na pasta **"shared"**, ele será implementado em **app.modules"**. No entanto, essa inclusão no arquivo **"app.modules"** deve ser eliminada e, em vez disso, o componente deve ser incorporado ao módulo da pagina que corresponde ao template no qual o componente será utilizado.
Essa abordagem visa garantir uma implementação do lazy load da forma mais eficiente e organizada possível.

## Criação de Páginas
Conforme a estrutura do arquivo **"Gerenciamento de Módulos.pdf"**.

1. Ao criar uma página, é obrigatório que a rota seja definida no template onde será carregada. Por exemplo, o arquivo **guest** possui seu próprio **routing.modules**, qualquer página que for criada para **guest** deve ser implementada no **routing.modules** de **guest**. **Guest.component** deve renderizar qualquer página filha dele, ou seja, as rotas em **guest** devem ser especificadas como **children**. Todas as páginas filhas serão renderizadas em lazy load
  
2. Toda página deve ser criada com um nome que corresponda à seção que será implementada. Por exemplo, ao criar uma página "home" em **guest**, o nome do módulo deverá ser **guestHome**. Essa prática ajuda a evitar conflitos de IDs de módulos durante o build da aplicação.


## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).