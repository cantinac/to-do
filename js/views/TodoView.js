define([
	'oolib'
	, 'handlebars'
	, 'js/views/BaseView'
], function(oolib, Handlebars, BaseView){

	// console.log("todoview class")

	var template = "\
	<div class = 'todo'>\
		<input type = 'checkbox' class = 'done' {{#if done}}checked = 'checked'{{/if}}/> <span class = 'name {{#if done}}done{{/if}}'>{{name}}</span> \
	</div>\
	";

	// console.log(BaseView)

	var TodoView = BaseView({
		_create: function(args){
			// console.log("init todoview", JSON.stringify(this))
			this._superApply("_create", arguments)

			// console.log("after init", JSON.stringify(this), this, this.el)

			this.template = Handlebars.compile(template)

			this.eventHandlers = {
				'.todo': {
					'click': function(){
						// console.log("clicked")
						this.model.set("done", !this.model.get("done"));
						this.render();
					}
				}
			}
		}
		, templateArgs: function(){
			var args = this._superApply("templateArgs", arguments)

			args.name = this.model.get("name")

			args.done = this.model.get("done")

			return args
		}
	})

	return TodoView
}) 
