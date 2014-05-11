/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });

    /*describe("A test suite", function() {
            beforeEach(function() {
        });
            afterEach(function() {
        });

        it('should fail', function() {
            expect(true).to.be.false;
        });
    });*/


    /*describe('DOM tests - Create Item Form', function() {
        var createItemForm = $('.create-item-form').first();
        var formField = $('.create-item-form__field', createItemForm);
        var formButton = $('.create-item-form__button', createItemForm);

        it('Create Item Form exists in the DOM', function() {
            expect(createItemForm).to.not.equal(null);
        });

        it('Form button has the right text', function() {
            expect(formButton.innerHTML).to.equal('Add To-do');
        });
    });*/

    /*describe('When adding a todo item', function() {
        var todoContent = 'Take a walk';

        before(function(done) {
            browser.fill('.todo-content', todoContent);
            browser.pressButton('Add Todo').then(done, done);
        });

        it('should show the added todo', function(done) {
            assert(browser.query('.todo-content').value === todoContent,
                'todo content must match');
            // done with test
            done();
        });
    });*/
    /*
    describe("Integration Testing", function() {
        /*var createItemForm = $('.create-item-form').first();
        var formField = $('.create-item-form__field', createItemForm);
        var formButton = $('.create-item-form__button', createItemForm);*/

        // User story:  "As a user, when adding a todo item, it should show up on the list."
        /*describe('When adding a todo item', function() {
            var todoContent = 'Take a walk';

            before(function(done) {
                browser.fill('.create-item-form__field', todoContent);
                browser.pressButton('.create-item-form__button').then(done, done);
            });

            it('should show up on the list', function(done) {
                assert(browser.query('.todo-list__item label').value === todoContent,
                    'todo content must match');
                // done with test
                done();
            });

            it('shows up on the list', function() {
                // Upon clicking button, expect text from input field to move to todo list
                
            });
        });

        // User story:  "As a user, when checking off a todo item, it is marked complete."
        describe('When checking off a todo item', function() {
            it('is marked complete', function() {
                // Expect todo item text to change color
                expect($this.css("color")).to.be.("#d7d4d7")
            });
        });
    });*/
})();
