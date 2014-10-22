var App = App || {};

// Todo View

App.TodoView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click input[type=checkbox]': 'completeTask'
  },

  render: function() {
    if (this.model.completed) {
      this.$el.html('<label class="completed"><input type="checkbox" checked />'+this.model.title+'</label>');  
    } else {
      this.$el.html('<label><input type="checkbox" />'+this.model.title+'</label>');
    }
    return this;
  },

  completeTask: function(e) {
    // add strike through
    $(e.target.parentElement).addClass('completed');
    // find task and save it as completed
    completed_task = App.Todos.get(this.model.id);
    completed_task.save({
      completed: true
    });
  }
});