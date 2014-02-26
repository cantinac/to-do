window.Todo = window.Todo || {};
window.Todo.TodoItem = Backbone.Model.extend({

    defaults: {
        text: '',
        done: false
    }

});

