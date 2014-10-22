var App = App || {};

// App View
  
App.AppView = Backbone.View.extend({
  el: "#app",
  
  events: {
    'click #addTask': 'addTask'
  },

  initialize: function() {
    App.Todos = new TodosCollection();
    App.Todos.fetch({forceRefresh:true});
    this.addPreviousTasks();
  },

  addTask: function(e) {
    e.preventDefault();
    task_title = $('#new-task').val();
    todo_view = new App.TodoView({model:{'title': task_title}});
    
    if (task_title != '') {
      // Add to DOM
      $('#task-list').prepend(todo_view.render().el);
      // Create entry in collection
      App.Todos.create({
        title: $('#new-task').val().trim(),
        completed: false
      });
    };
    // remove content from input
    $('#new-task').val('');
  },
  
  addPreviousTasks: function() {
    this.$('#todo-list').html('');
    
    App.Todos.each(function(item) {
      todo_view = new App.TodoView({ model: item.attributes });
      $('#task-list').prepend(todo_view.render().el);
    });
  }

});
