window.Todo = window.Todo || {};
window.Todo.TodoView = Backbone.View.extend({

    el: 'body',

    initialize: function() {

        this.$todoText = $('#todo-add .todo-text');
        this.$list = $('#todo-list');

        this.listenTo(window.Todo.todos, "add", this.render);

        window.Todo.todos.fetch();

    },

    events: {
        'keypress #todo-add .todo-text': 'addTodoEnter',
        'keyup #todo-add .todo-text': 'addTodoEnter',
        'keydown #todo-add .todo-text': 'addTodoEnter',
        'click #todo-add .submit': 'addTodo'
    },

    addTodoEnter: function(e){
        
        // Enter was pressed
        if (e.which === 13){
            this.addTodo();
        }

    },

    addTodo: function() {

        var text = $('#todo-add .todo-text').val();

        if (text !== ''){ 

            var thisTodo = new window.Todo.TodoItem({
                done: false,
                text: text
            });

            window.Todo.todos.add(thisTodo);

            thisTodo.save();
            
            this.$todoText.val("");
            this.$todoText.focus();
        }

    },

    render: function(model) {
        
        var view = new window.Todo.TodoItemView({model: model});

        this.$list.append(view.render().$el);
    }

});