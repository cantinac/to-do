var App = App || {};

// Todos Collection

var TodosCollection = Backbone.Collection.extend({
  model: App.TodoModel,
  localStorage: new Backbone.LocalStorage('todos-backbone')
});