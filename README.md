# Projeto 02: "frontend-nanodegree-feedreader"

Este segundo projeto pertence ao curso de Web FrontEnd Avançado da Udacity e tem como intuito por em prática o uso do framework de testes Jasmine, sendo utilizado em um site de feed de notícias.

Todo o projeto foi clonado do repositório localizado em https://github.com/udacity/frontend-nanodegree-feedreader.git , sendo como alvo de implementação o arquivo `feedreader.js` , onde foram codificados todos os testes solicitados.

## Acesso ao teste

Para acessar a página e verificar a utilização dos testes você deverá clonar o repositório com o comando:

`git clone https://github.com/msantosf/arcade-game-master.git`

Com o repositório clonado, será necessário acessar a raiz do diretório e abrir o arquivo `index.html` .

Abrindo o arquivo com um de seus navegadores favoritos, poderá ver no rodapé da página o framework e todos os testes implementados.

## Testes feitos

* Suíte _`'RSS Feeds'`_

  * _"`'are defined'`"_ - Primeiro teste

    Este teste foi o único que já estava pronto do repositório original e tem como intuito testar se o array `allFeeds` declarado em `app.js` não é nulo e seu tamanho não é 0.

  * _`'existe uma URL'`_

    Teste que faz a verificação se existe uma URL válida definida. Para essa verificação é criado uma variável que armazena uma string e logo é comparada com o método `.toMatch()`.

  * _`'existe um nome'`_

    Teste que faz a verificação se existe um nome que não seja vazio e que não seja um número.

* Suíte _`'O Menu'`_

  * _`'Menu elemento esta oculto '`_

    Teste valida se por padrão o elemento `<body>` possui a classe CSS `menu-hidden` . Essa classe garante que o menu esteja oculto e só apareça quando o usuário efetua o clique no ícone.

  * _`'visibilidade do menu'`_

    Neste teste foram utilizados mótodos do `jasmine-jquery` .

    O teste consiste em validar se com o clique do mouse no ícone de menu ele irá ser exibido e se clicado novamente o menu ficará oculto.

    Primeiramente é engatilhado um evento de `click()` no ícone de menu:

    `$('.menu-icon-link').click();`

    Após o clique é testado se o body possui ou não a classe `menu-hidden` com o metódo `hasClass()`. Esse processo de engatilhar é feito duas vezes, primeiro para testar se não existe, e depois para testar se existe.

* Suíte _`'Entradas iniciais'`_

Suíte de teste assíncrono que tem como o intuito a verificação se existe algum conteúdo de notícia dentro do container de feed.

Para isso é utilizado o recurso do `beforeEach()` que tem  intuito carregar a função `loadFeed()` de `app.js`.

  * _`'existe um elemento em .feed'`_

    Após o carregamento enfim é selecionado um artigo criado e testado se o mesmo possui possui a classe `entry`, indicando assim a existência de um feed.

* Suíte _`'Nova seleção de feed'`_

Mais uma suíte de teste assíncrono. Tem como intuito verificar se os feeds carregados divergem entre si, e se por uma acaso não é o mesmo feed sendo carregado mais de uma vez.

São utilizadas duas variáveis:

`contAntigo` - conteúdo que armazena o primeiro feed carregado pela função `loadFeed()` .

`contNovo` - conteúdo que armazana o segundo feed carregado pela função `loadFeed()` .

Antes do teste em si, é utilizado o `beforeEach()` que chama `loadFeed()` duas vezes. Na primeira, o primeiro conteúdo é armazenado na variável `contAntigo` . Depois a função é chamada novamente para carregar o novo conteúdo no DOM.

  * _`'Mudança de feed'`_

    Antes de continuar o teste, é armazenado o valor do novo conteúdo carregado pelo `beforeEach()` e só depois que se é comparado os dois conteúdos em cada variável:

    `expect(contAntigo).not.toBe(contNovo);`
