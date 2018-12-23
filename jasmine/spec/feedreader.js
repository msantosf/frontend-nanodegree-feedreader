$(function() {
    /* RSS Feeds - primeira suíte de testes.
      São testados tudo relacionado ao array que contem os feeds.
    */
    describe('RSS Feeds', function() {
        /* 'are defined' - Teste escrito pela equipe Udacity como exemplo para
        todo o projeto.
            Nesse teste verifica-se se o array foi definido e se não está vazio
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });


        /* Teste no qual é verificado se existe uma URL válida.
         */
        it('existe uma URL', function() {
          // Cria-se uma variável armazenando uma String para comparação com a URL de allFeeds
          var string = 'http\://'
          allFeeds.forEach(function(value, index) {
            expect(allFeeds[index].url).toMatch(string);
          });
        });


        /* Teste no qual é verificado se o nome foi definido.
         */
        it('existe um nome', function () {
          // Garante-se que o nome não é vazio e não seja um número
          allFeeds.forEach(function(value, index) {
            expect(allFeeds[index].name.length).not.toBe(0);
            expect(typeof allFeeds[index].name).not.toBe('number');
          });
        });
    });


    /* O menu - segunda suíte de testes*/
    describe('O Menu', function() {

        /* Teste onde é verificado se o menu está oculto por padrão.
           Sendo verificado se o elemento body possui a classe que torna
           o menu oculto.
         */
        it('Menu elemento esta oculto', function() {
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Teste onde é engatilhado o evento de click para se testar a
            visibilidade do menu com o evento. Com o click inicial, o menu deverá
            ser visualizado. Já no segundo clique, o mesmo deve ficar oculto.
          */
        it('visibilidade do menu', function() {
          // Engatilha-se o click
          $('.menu-icon-link').click();
          // Verifica se após o click o body possui menu-hidden, fator que não pode ser verdadeiro no primeiro caso
          expect($('body').hasClass('menu-hidden')).not.toBe(true);
          // Egantilha-se novamente outro click
          $('.menu-icon-link').click();
          // Esperasse que após novo click o body possua a classe menu-hidden
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Entradas Iniciais - terceira suíte de testes*/

    /* Suíte onde é testado e validado se existe ao menos 1 elemento de feeds
       após chamar a função loadFeed().
     */

    describe('Entradas Inicias', function() {
        beforeEach(function(done) {
          // Chama-se loadFeed com index 0 para carregar o conteúdo
          loadFeed(0,done);
        });

        it('existe um elemento em .feed', function(done) {
          var entrada = $('.feed .entry');
          expect(entrada).toBeTruthy();
          done();
        });
    });

    /* Nova seleção de feed - quarta suíte de testes */

    /* Suíte onde se testa se o conteúdo do feed não está se duplicando.
     */
    describe('Nova seleção de feed', function() {
      var contAntigo, contNovo;

      beforeEach(function() {
        $('.feed').empty();
        //capturando primeiro feed
        loadFeed(0,function() {
          // Ao chamar a loadFeed, atribuo a minha variavel o valor do feed da posição 0
          contAntigo = $('.feed').html();
          // Chama-se loadFeed novamente passando outro index
          loadFeed(1, done());
        });
      });

      it('Mudança de feed', function() {
        // Com o novo feed apontando para um novo index, atribuo minha variavel o valor do feed na posição 1
        contNovo = $('.feed').html();
        // Testo se os conteúdos são iguais
        expect(contAntigo).not.toBe(contNovo);
      });
    });
}());
