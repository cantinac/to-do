todoApp = window.todoApp

{Todo, TodoCollection} = todoApp

TodoItemView = Backbone.Marionette.ItemView.extend {
	template: "#todo-item-tmpl"
	tagName: "li"
	events:
		"change input[type='checkbox']": "boxChecked"
	boxChecked: (e) ->
		$target = $(e.target)
		isChecked = $target.attr("checked")
		@model.set "completed", isChecked

	modelEvents:
		"change": "modelChanged"
	modelChanged: ->
		console.log "CHANGE"
		@render()
}

TodoCompositeView = Backbone.Marionette.CompositeView.extend {

	template: "#todo-list-tmpl"

	itemView: TodoItemView

	itemViewContainer: "ul"

	events:
		"click #todo-entry-btn": "addTodo"

	addTodo: ->

		@$input ?= @$el.find("#todo-input").first()
		todoBody = @$input.val()

		# only add a new model if the text input wasn't blank
		if todoBody? and (todoBody.length > 0)
			# if we've added a model, clear the text input box
			@$input.val("")

			# instantiate the new model and add it to the view's collection
			_todo = new Todo({completed: false, body: todoBody})
			@collection.add _todo
}

todoApp.TodoItemView = TodoItemView
todoApp.TodoCompositeView = TodoCompositeView

