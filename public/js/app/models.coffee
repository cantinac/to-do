
# create `todoApp` if it doesn't exist
window.todoApp ?= {}
todoApp = window.todoApp

# represents a single to-do item.
Todo = Backbone.Model.extend {
	defaults: ->
		_defaults =
			completed: false
			body: "A to-do item."
		return _defaults
}


# represents a list of to-do items.
TodoCollection = Backbone.Collection.extend {
	model: Todo
}

todoApp.Todo = Todo
todoApp.TodoCollection = TodoCollection