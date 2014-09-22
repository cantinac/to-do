/**
 * Cantina coding assessment – TODO application
 *
 * @author Joseph Wilson
 */

(function() {
    var isLandscape = function() {
        return $(window).width() > 768;
    };

    // Helper function to get the Mustache template
    var getTemplate = function(name) {
        return Mustache.compile($('#'+name+'-template').html());
    };

    var TodoApp = {
        form: null
    };

    window.TodoApp = TodoApp;

    // Configure the Todo model
    TodoApp.Todo = Backbone.Model.extend({
        defaults: {
            description: "",
            completed: false,
            modified: new Date().getTime()
        }
    });

    // Configure the Todos collection to use the Todo model and local storage for persistence
    TodoApp.Todos = Backbone.Collection.extend({
        model: TodoApp.Todo,
        localStorage: new Backbone.LocalStorage("todos"),
        comparator: function(todo) {
            return [todo.get("completed"), todo.get("modified")];
        }
    });

    // Configure the index view
    TodoApp.Index = Backbone.View.extend({
        template: getTemplate("index"),
        initialize: function() {
            // This function is automatically called upon instantiation

            // Initialize the Todos collection
            this.todos = new TodoApp.Todos();

            this.todos.on("all", this.render, this);

            // Get any existing Todos from local storage
            this.todos.fetch();
        },
        render: function() {
            // Render the view
            $(this.el).html(this.template(this));

            // Add the form
            TodoApp.form = new TodoApp.Index.Form({collection: this.todos});
            $(this.el).prepend(TodoApp.form.render().el);

            // Add the todos
            this.todos.each(this.addTodo, this);

            // Allow chaining
            return this;
        },
        addTodo: function(todo) {
            var todoEl = new TodoApp.Index.Todo({model: todo}).render().el;

            if ( todo.get("completed") === true ) {
                $(todoEl).find("input[type=\"checkbox\"]").attr("checked", "checked");
            }

            this.$(".todos").append(todoEl);
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

            var completed = this.model.get("completed");

            if ( completed ) {
                $(this.el).addClass("complete");
            }

            // Allow chaining
            return this;
        },
        description: function() {
            return this.model.get("description");
        },
        toggleTodo: function() {
            var completed = this.model.get("completed");

            if ( completed ) {
                $(this.el).removeClass("complete");
            }
            else {
                $(this.el).addClass("complete");
            }

            this.model.set("completed", !completed);
            this.model.set("modified", new Date().getTime());

            this.model.save();

            this.model.collection.sort();
        }
    });

    // Configure the form view
    TodoApp.Index.Form = Backbone.View.extend({
        tagName: "form",
        className: "todo-form",
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

            var description = this.$("#todo").val();

            if ( description.length > 0 ) {
                // Create a new todo with the given description
                this.collection.create({
                    description: description,
                    completed: false
                });

//                this.render();
            }
        },
        placeholderText: function() {
            return "What do you need to get done?";
        },
        addButtonText: function() {
            if ( isLandscape() ) {
                return "Add To-do";
            }
            else {
                return "+";
            }

        }
    });

    // Configure the router
    TodoApp.Router = Backbone.Router.extend({
        initialize: function(options) {
            this.el = options.el;
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

        $(window).on("resize", function() {
            if ( isLandscape() ) {
                TodoApp.form.addbuttonText = "Add To-do";
            }
            else {
                TodoApp.form.addbuttonText = "+";
            }

            TodoApp.form.render();
        });
    };
})();

// Initialize the Todo app after the DOM has loaded
$(function() {
    TodoApp.run("#todo-app");
});
