/**
 * Cantina coding assessment – TODO application
 *
 * @author Joseph Wilson
 */

(function() {
    // Helper function to get the Mustache template
    var getTemplate = function(name) {
        return Mustache.compile($('#'+name+'-template').html());
    };

    var TodoApp = {};

    window.TodoApp = TodoApp;

    // Configure the Todo model
    TodoApp.Todo = Backbone.Model.extend({
        defaults: {
            description: "",
            completed: false
        }
    });

    // Configure the Todos collection to use the Todo model and local storage for persistence
    TodoApp.Todos = Backbone.Collection.extend({
        model: TodoApp.Todo,
        localStorage: new Store("todos")
    });

    // Configure the index view
    TodoApp.Index = Backbone.View.extend({
        template: getTemplate("index"),
        initialize: function() {
            // This function is automatically called upon instantiation

            // Initialize the Todos collection
            this.todos = new TodoApp.Todos();

            this.todos.on("all", this.render, this);

            this.todos.fetch();

            // Bind the add event to the collection
//                this.todos.bind("add", this.appendTodo);
        },
        render: function() {
            // Render the view
            $(this.el).html(this.template(this));

            this.todos.each(this.addTodo, this);


            $(this.el).prepend(new TodoApp.Index.Form({collection: this.todos}).render().el);

            // Allow chaining
            return this;
        },
        addTodo: function(todo) {
            this.$(".todos").append(new TodoApp.Index.Todo({model: todo}).render().el);
        }
    });

    // Configure the Todo view
    TodoApp.Index.Todo = Backbone.View.extend({
        className: "todo",
        template: getTemplate("todo"),
        events: {
            "click .toggle": "toggleTodo"
        },
        render: function() {
            $(this.el).html(this.template(this));

            // Allow chaining
            return this;
        },
        description: function() {
            return this.model.get("description");
        },
        toggleTodo: function() {
            
        }
    });

    // Configure the form view
    TodoApp.Index.Form = Backbone.View.extend({
        tagName: "form",
        className: "",
        template: getTemplate("form"),
        events: {
            "submit": "addTodo"
        },
        render: function() {
            // Render the Mustache template
            $(this.el).html(this.template(this));

            // Allow chaining
            return this;
        },
        addTodo: function(event) {
            // Prevent the form from submitting
            event.preventDefault();

            // Create a new todo with the given description
            this.collection.create({
                description: this.$("#todo").val(),
                completed: false
            });

            this.render();
        },
        placeholderText: function() {
            return "What do you need to get done?";
        },
        addButtonText: function() {
            return "Add To-do";
        }
    });

    // Configure the router
    TodoApp.Router = Backbone.Router.extend({
        initialize: function(options) {
            this.el = options.el[0];
        },
        routes: {
            "": "app"
        },
        app: function() {
            var app = new TodoApp.Index();
            $(this.el).empty();
            $(this.el).append(app.render().el);
        }
    });

    TodoApp.run = function(container) {
        // Start the app
        new TodoApp.Router({
            el: $(container)
        });

        // Begin dispatching routes
        Backbone.history.start();
    };
})();


// Initialize the Todo app after the DOM has loaded
$(function() {
    TodoApp.run("#todo-app");
});
