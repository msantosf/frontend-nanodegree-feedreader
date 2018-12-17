/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('existe uma URL', function() {
          // Cria-se uma variável armazenando uma String para comparação com a URL de allFeeds
          var string = 'http\://'
          allFeeds.forEach(function(value, index) {
            expect(allFeeds[index].url).toMatch(string);
          });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('existe um nome', function () {
          // Garante-se que o nome não é vazio e não seja um número
          allFeeds.forEach(function(value, index) {
            expect(allFeeds[index].name.length).not.toBe(0);
            expect(typeof allFeeds[index].name).not.toBe('number');
          });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('O Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu elemento esta oculto', function() {
          // Garante-se que o elemento está oculto tendo a classe menu.hidden
          expect(document.querySelector('.menu-hidden')).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
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
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    describe('Entradas Inicias', function() {
        beforeEach(function(done) {
          // Chama-se loadFeed com index 0 para carregar o conteúdo
          loadFeed(0,done);
        });

        it('existe um elemento em .feed', function(done) {
          var entrada = $('article');
          // Testa-se se o artigo possui a classe entry, indicando assim que o conteúdo foi carregado
          expect(entrada.hasClass('entry')).toBeTruthy();
          done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
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
