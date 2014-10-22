var App = App || {};

// Todo Model
  
App.TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});
