/****
*
* Todo App - James Hendy
*
*****/

// Object to hold any globals and/or constants to avoid muddying the global namespace
var Globals = {};

Globals.ENTER_KEY = 13;

// Set the default text based on the window innerWidth
if(window.innerWidth <= 980)
	$("#btnAddNewTodo").text("+");

// Listen for resize changes
window.addEventListener("resize", function() {
	if(window.innerWidth <= 980) {
		// Change Button text as the screen shrinks
		$("#btnAddNewTodo").text("+");
	} else {
		// Change Button text as the screen expands
		$("#btnAddNewTodo").text("Add To-do");
	}
}, false);

$(function() {
	/****
	*
	* Model: TodoItem
	*
	*****/
	var TodoItem = Backbone.Model.extend({
		defaults: function() {
			return {
				text:"",
				complete:false
			};
		},

		// Toggle the items completeness
		toggleComplete: function() {
			this.set({complete:!this.get("complete")});
		}
	});

	/****
	*
	* View: TodoItemView
	*
	*****/
	var TodoItemView = Backbone.View.extend({
		tagName:"li",
		template:_.template($('#template-item').html()),
		events:{
			"click .chkComplete":"toggleComplete"
		},
		initialize:function(inits) {
			// Create the a new model for this item
			this.model = new TodoItem({text:inits.text});
			// Check for any changes to this items model
			this.listenTo(this.model, 'change', this.render);
		},
		render:function() {
			// Draw the template
			this.$el.html(this.template(this.model.toJSON()));

			// Change the state of the template based on the models complete property
			this.$el.toggleClass('complete', this.model.get('complete'));

			return this;
		},
		toggleComplete:function() {
			// Check Box was clicked... Toggle Complete!
			this.model.toggleComplete();
		}
	});

	/****
	*
	* View: AppView
	*
	*****/
	var AppView = Backbone.View.extend({
		el:$("#appContainer"),
		events:{
			"keypress #newTodo":"keypressCreatenewTodo",
			"click #btnAddNewTodo":"addTodoItem"
		},
		initialize:function() {
			// Input text field
			this.txtInput = this.$('#newTodo');

			// Hold all items
			this.allItems = [];
		},
		render:function() {
			// Most likely wont need to render anything... but will leave for now...
		},
		addTodoItem:function() {
			// Check that the text input is not empty
			if(!this.txtInput.val())return;

			// Add a new todo item and append it to the list
			var itemView = new TodoItemView({text:this.txtInput.val()});
			this.$("#todoList").append(itemView.render().el);

			// Add to an item array just incase we need later... doesn't look like I will for the requirements...
			this.allItems.push(itemView);

			// Reset the text input
			this.txtInput.val('');
		},
		keypressCreatenewTodo:function(evt) {
			// Check to see if the enter key has been pressed
			if(evt.keyCode != Globals.ENTER_KEY) return;

			// Add todo
			this.addTodoItem();
		}
	});

	// App namespace
	var App = new AppView
});
