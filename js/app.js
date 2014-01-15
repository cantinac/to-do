App = Ember.Application.create();

// Models
App.Todo = Ember.Object.extend({});

// Routes
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [App.Todo.create({title: "My first todo", isDone: false})];
  }
});
