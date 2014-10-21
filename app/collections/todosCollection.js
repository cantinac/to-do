var App = App || {};

// Todos Collection

var TodosCollection = Backbone.Collection.extend({
  model: App.Todo,
  localStorage: new Backbone.LocalStorage('todos-backbone'),
});

App.Todos = new TodosCollection();