var Todo = (function() {


    // Models

    var TodoModel = Backbone.Model.extend({
        initialize: function() {
        },
        defaults: {
            text: "",
            completed: "false"
        }

    });

    // Collections

    var ApplicationCollection = Backbone.Collection.extend({
            initialize: function() {
                this.on("add", this.onAdd);
            },

            model: TodoModel,

            onAdd: function(model) {
                new TodoView(model)
            }

    });


    // Views

    var ApplicationView = Backbone.View.extend({

        template: _.template($('#tpl-application').html()),

        initialize: function() {       
            this.collection.on("add", (function(that) {
                    return function(model) {
                        var targetUlEl = $('<li class="li-holder"></li>').appendTo(that.$el.find('#todoUl'));
                        var thisToDo = new TodoView({ el: targetUlEl, model: model }).render();
                        thisToDo.listenTo(thisToDo.model, "change", function() {
                            this.render();
                        });
                    }
                })(this)
            );
            this.render();
        },

        render: function() {
            return this.$el.html(this.template());
        },

        addTodoItem: function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var $input = this.$el.find('#inputField');
            if ($input.val().length > 0) {
                this.collection.add( new TodoModel({text: $input.val(), completed: "false"}) );
                $input.val('');
                $input.focus();
            }
        },

        events: {
            "submit #addForm": "addTodoItem"
        }

    });

    var TodoView = Backbone.View.extend({

        template: _.template($('#tpl-todo').html()),

        initialize: function() {
            this.viewId = new Date().getTime();
        },

        render: function() {
                var templateArgs = { 
                    todoText: this.model.attributes.text, 
                    itemChecked: this.model.attributes.completed 
                };
                this.$el.find('input[type="checkbox"]').off("change", this.toggleCompleted(this));
                this.$el.off("click", this.toggleChecked);
                var replacement = $(this.template(templateArgs));
                this.$el.replaceWith(replacement);
                this.$el = replacement;
                this.$el.find('input[type="checkbox"]').on("change", this.toggleCompleted(this));
                this.$el.on("click", this.toggleChecked);
                return this;
        },

        toggleCompleted: function(that) {
            return function(e) {
                if (that.model.attributes.completed == "true") {
                    that.model.set("completed", "false");
                } else {
                    that.model.set("completed", "true");
                }
            }
        },

        toggleChecked: function(e) {
            var inputEl = e.currentTarget.childNodes[1];
            inputEl.checked ? inputEl.checked = false : inputEl.checked = true;
            $(inputEl).trigger('change');
        }

    });



    return {
        init: function() {
            new ApplicationView({ el: $("#applicationContainer"), collection: new ApplicationCollection() });
        }

    }
}
)();





// initialization of whole app on page load

$(function() {  
    Todo.init();
});

