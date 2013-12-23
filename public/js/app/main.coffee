# after DOM loads, instantiate a collection and
# a composite view and start up the application.

$ ->
	todoApp = window.todoApp

	app = new Backbone.Marionette.Application()
	todoApp.app = app

	app.addRegions {
		"main": "#todo-wrapper"
	}

	{Todo, TodoCollection, TodoItemView, TodoCompositeView} = todoApp

	todos = new TodoCollection()
	todoView = new TodoCompositeView({collection: todos})
	app.getRegion("main").show( todoView )
