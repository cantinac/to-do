/* global casper, __utils__ */
'use strict';

// Namespaced config:
var todoApp = todoApp || {};
todoApp.tests = todoApp.tests || {};
todoApp.tests.functional = todoApp.tests.functional || {};
todoApp.tests.functional.config = {
    url: 'http://localhost:9000',
    item: 'Take a walk'
};

casper.test.begin('As a user, when adding a todo item, it should show up on the list.', 6, function suite(test) {

    var config = todoApp.tests.functional.config;
    var label;

    casper.start(config.url, function() {
        casper.echo('\n1. Verify HTTP connection:');
        test.assertHttpStatus(200);

        casper.echo('\n2. Verify the Create Item Form exists:');
        test.assertExists('.create-item-form');

        casper.echo('\n3. Verify the Create Item Form exists:');
        test.assertExists('.todo-list');

        casper.echo('\n4. Verify the Todo List is empty:');
        test.assertDoesntExist('.todo-list__item');

    })
    .then(function() {
        casper.echo('\nFill in the form & click the button...');

    })
    .thenEvaluate(function(item) {
        document.querySelector('input[name="q"]').setAttribute('value', item);
        document.querySelector('.create-item-form__button').click();

    }, config.item)
    .then(function() {
        casper.echo('\n5. Wait for the new Todo List Item to appear...');
        this.waitUntilVisible('.todo-list__item', function() {
            test.pass('Todo list item is visible');
            
            label = this.evaluate(function() {
                return __utils__.findOne('.todo-list__item:last-child label').childNodes[0].nodeValue;
            });

            casper.echo('\n6. Verify the new Todo List Item matches what was entered into the form:');
            test.assertEquals(label, config.item);
        });
    })
    .run(function() {
        test.done();
    });
});

/*casper.test.begin('As a user, when checking off a todo item, it is marked complete.', 1, function suite(test) {
    //expect($this.css("color")).to.be.("#d7d4d7")
});*/
