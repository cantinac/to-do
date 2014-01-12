/*global Backbone, microtemplate, ENTER_KEY */
var app = app || {};

(function () {
	'use strict';

	var toggleEl = function (el, toggle) {
		el.style.display = toggle ? '' : 'none';
	};

	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoApp',

		// Delegated events for creating new items.
		events: {
			'keypress #new-todo': 'createOnEnter',
			'click #add-todo': 'createOnButtonClick'
			//'click #clear-completed': 'clearCompleted',
			//'click #toggle-all': 'toggleAllComplete'
		},

		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			//this.allCheckbox = this.find('#toggle-all');
			
			this.input = this.find('#new-todo');
			//this.footer = this.find('#footer');
		
			this.main = this.find('#main');

			this.listenTo(app.todos, 'add', this.addOne);
			//this.listenTo(app.todos, 'reset', this.addAll);
			this.listenTo(app.todos, 'change:completed', this.filterOne);
			//this.listenTo(app.todos, 'filter', this.filterAll);
			this.listenTo(app.todos, 'all', this.render);

			// Suppresses 'add' events with {reset: true} and prevents the app view
			// from being re-rendered for every model. Only renders when the 'reset'
			// event is triggered at the end of the fetch.
			app.todos.fetch({reset: true});
			console.log('Initialized')
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var completed = app.todos.completed().length;
			var remaining = app.todos.remaining().length;
			var selector = '[href="#/' + (app.TodoFilter || '') + '"]';

			if (app.todos.length) {
				// TODO
				toggleEl(this.main, true);

			} else {
				toggleEl(this.main, false);
			//	toggleEl(this.footer, false);
			}

			//this.allCheckbox.checked = !remaining;
		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (todo) {
			var view = new app.TodoView({ model: todo });
			document.querySelector('#todo-list').appendChild(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		//addAll: function () {
		//	this.find('#todo-list').innerHTML = '';
		//	app.todos.forEach(this.addOne, this);
		//},

		//filterOne: function (todo) {
	//		todo.trigger('visible');
	//	},

	//	filterAll: function () {
	//		app.todos.forEach(this.filterOne, this);
	//	},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: this.input.value.trim(),
				order: app.todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		createOnEnter: function (e) {
			if (e.which !== ENTER_KEY || !this.input.value.trim()) {
				return;
			}

			app.todos.create(this.newAttributes());
			this.input.value = '';
			this.input.placeholder = 'What do you need to get done?';
		},
		createOnButtonClick: function() {
			app.todos.create(this.newAttributes());
			this.input.value = '';
			this.input.placeholder = 'What do you need to get done?';

		}

		// Clear all completed todo items, destroying their models.
		//clearCompleted: function () {
		//	app.todos.completed().forEach(function (todo) {
		//		todo.destroy();
		//	});
		//	return false;
		//},

		//toggleAllComplete: function () {
		//	var completed = this.allCheckbox.checked;

		//	app.todos.forEach(function (todo) {
		//		todo.save({
		//			'completed': completed
		//		});
		//	});
		//}
	})

})();
