window.Todo = window.Todo || {};
var Todos = Backbone.Collection.extend({

	model: window.Todo.TodoItem,

	localStorage: new Backbone.LocalStorage("todo-list")

});	

window.Todo.todos = new Todos();

