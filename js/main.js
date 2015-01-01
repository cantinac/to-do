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
				$('#newTodo p.message').html(error).addClass('error');
			});
		},

		validate: function(attrs) {
			if (!$.trim(attrs.title)) {
				//return 'It\'s too easy to accomplish nothing. Make sure you enter a something to do before hitting the Add button.';
				return 'Please enter a task';
			}
		}
	});

	App.Collections.Todos = Backbone.Collection.extend({
		model: App.Models.Todo
	});

	// collection view
	App.Views.Todos = Backbone.View.extend({
		tagName: 'ul',

		initialize: function() {
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
		tagName: 'li',

		template: template('todosTemplate'),

		events: {
			'click input': 'updateStatus'
		},

		updateStatus: function() {
			if (this.$el.find('input').is(':checked')) {
				// mark as complete
				this.model.set('status', 1);
				this.$el.addClass('complete');
			} else {
				// mark as incomplete
				this.model.set('status', 0);
				this.$el.removeClass('complete');
			}
		},

		render: function() {
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

		submit: function(e) {
			e.preventDefault();

			this.$el.find('p.message').removeClass('error');

			var newTodoTitle = $(e.currentTarget).find('input.todo').val();
			var todo = new App.Models.Todo({title: newTodoTitle});

			if (todo.isValid()) {
				var $this = this;
				$('.noTodos').fadeOut(function() {
					$this.collection.add(todo);
					$(e.currentTarget).find('input.todo').val('');
				});
			}
		}
	});


	var todosCollection = new App.Collections.Todos();

	var newTodoView = new App.Views.NewTodo({collection: todosCollection});

	var todosView = new App.Views.Todos({collection: todosCollection});
	$('#todos').html(todosView.render().el);

})();