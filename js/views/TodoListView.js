define([
	'backbone'
	, 'handlebars'
	, 'js/views/BaseView'
	, 'js/collections/TodoCollection'
	, 'js/models/TodoModel'
	, 'js/views/TodoView'
], function(Backbone, Handlebars, BaseView, TodoCollection, TodoModel, TodoView){

	// console.log(arguments)

	var template = "\
	<div class = 'todoList'>\
		<div class = 'todoListTopTable'> \
			<div class = 'todoListTopRow'> \
				<div class = 'todoEntry'> \
					<input type = 'text' class = 'entry' placeholder = 'What do you need to get done?' /> \
				</div> \
				<div class = 'todoButton'> \
					<div class = 'addNew'></div> \
				</div> \
			</div> \
		</div> \
		<div class = 'children'></div> \
	</div>\
	";

	try{
	var TodoListView = BaseView({

		_create: function(args){
			this._superApply("_create", arguments)

			this.template = Handlebars.compile(template)

			this.collection = new TodoCollection({})

			this.eventHandlers = {
				'.todoButton': {
					'click': function(){
						console.log("add new")
						this.addTask(this.findOneElement(".entry").value)
					}
				}
			}
		}

		, addTask: function(name){
			var model = new TodoModel({
				name: name
			})
			, view = new TodoView({
				model: model
			})

			this.collection.add(model)

			this.addChild(view)
		}
	})
	}catch(e){console.log(e)}

	return TodoListView
}) 
 
