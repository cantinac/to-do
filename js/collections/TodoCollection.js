define([
	'backbone'
	, 'js/models/TodoModel'
], function(Backbone, TodoModel){
	
	var TodoCollection = Backbone.Collection.extend({
		model: TodoModel
	})

	return TodoCollection;
}) 
