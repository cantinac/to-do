// Generated by CoffeeScript 1.6.3
(function() {
  var Todo, TodoCollection, TodoCompositeView, TodoItemView, todoApp;

  todoApp = window.todoApp;

  Todo = todoApp.Todo, TodoCollection = todoApp.TodoCollection;

  TodoItemView = Backbone.Marionette.ItemView.extend({
    template: "#todo-item-tmpl",
    tagName: "li",
    events: {
      "change input[type='checkbox']": "boxChecked"
    },
    boxChecked: function(e) {
      var $target, isChecked;
      $target = $(e.target);
      isChecked = $target.attr("checked");
      return this.model.set("completed", isChecked);
    },
    modelEvents: {
      "change": "modelChanged"
    },
    modelChanged: function() {
      console.log("CHANGE");
      return this.render();
    }
  });

  TodoCompositeView = Backbone.Marionette.CompositeView.extend({
    template: "#todo-list-tmpl",
    itemView: TodoItemView,
    itemViewContainer: "ul",
    events: {
      "click #todo-entry-btn": "addTodo"
    },
    addTodo: function() {
      var todoBody, _todo;
      if (this.$input == null) {
        this.$input = this.$el.find("#todo-input").first();
      }
      todoBody = this.$input.val();
      if ((todoBody != null) && (todoBody.length > 0)) {
        this.$input.val("");
        _todo = new Todo({
          completed: false,
          body: todoBody
        });
        return this.collection.add(_todo);
      }
    }
  });

  todoApp.TodoItemView = TodoItemView;

  todoApp.TodoCompositeView = TodoCompositeView;

}).call(this);
