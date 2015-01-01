(function() {

window.App = {
	Models: {},
	Collections: {},
	Views: {}
};

window.template = function(id) {
	return _.template($('#' + id).html());
};


App.Models.Todo = Backbone.Model.extend({
	defaults: {
		title: 'My To-do',
		status: 0
	},

	initialize: function() {
		this.on('invalid', function(model, error) {
			alert(error);
		});
	},

	validate: function(attrs) {
		if (!$.trim(attrs.title)) {
			return 'It\'s too easy to accomplish nothing. Make sure you enter a something to do before hitting the Add button.';
		}
	}
});

App.Collections.Todos = Backbone.Collection.extend({
	model: App.Models.Todo
});

// collection view
App.Views.Todos = Backbone.View.extend({
	initialize: function() {
		console.log('hi todos');
		this.collection.on('add', this.addOne, this);
	},

	render: function() {
		this.collection.each(this.addOne, this);
		return this;
	},

	addOne: function(todo) {
		// creates new child view
		var todoView = new App.Views.Todo({model: todo});

		// renders and appends to root element
		this.$el.append(todoView.render().el);
	}
});

App.Views.Todo = Backbone.View.extend({
	tagName: 'input',

	template: template('todoTemplate'),

	initialize: function() {
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	events: {
		'click .edit': 'editTodo',
		'click .delete': 'destroy'
	},

	editTodo: function() {
		// proves we still have access to model
		var newTodo = prompt('what would you like to change the text to?', this.model.get('title'));

		// stores entered value
		this.model.set('title', newTodo, {validate: true});
	},

	destroy: function() {
		// only if it's not the last one...
		console.log(this.$el.siblings().length);
		if (this.$el.siblings().length > 0) {
			this.model.destroy();
		} else {
			var r = confirm('are you sure you want to delete your last todo?');
			if (r) {
				this.model.destroy();
			}
		}
	},

	remove: function() {
		this.$el.remove();
	},

	render: function() {
		// renders li with title inside
		//this.$el.html(this.model.get('title'));

		// renders using template
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		return this;
	}

});

// view responsible for adding todo to collection
App.Views.NewTodo = Backbone.View.extend({
	el: '#newTodo',

	events: {
		'submit': 'submit'
	},

	initialize: function() {

	},

	submit: function(e) {
		e.preventDefault();

		var newTodoTitle = $(e.currentTarget).find('input.todo').val();
		var todo = new App.Models.Todo({title: newTodoTitle});

		if (todo.isValid()) {
			this.collection.add(todo);
			$(e.currentTarget).find('input.todo').val('');
		}
	}
});


var todosCollection = new App.Collections.Todos([
	{
		title: 'Go to the store',
		priority: 4
	},
	{
		title: 'Go to the mall',
		priority: 3
	},
	{
		title: 'Go to hell',
		priority: 5
	}
]);
console.log(todosCollection);

//var newTodoView = new App.Views.NewTodo({collection: todosCollection});

//var todosView = new App.Views.Todos({collection: todosCollection});
//$('#todos').html(todosView.render().el);

})();