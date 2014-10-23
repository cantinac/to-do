define([
	'backbone'
], function(Backbone){
	var TodoModel = Backbone.Model.extend({
		defaults: {
			name: "Unknown task"
			, done: false
		}
	})

	return TodoModel;
}) 
