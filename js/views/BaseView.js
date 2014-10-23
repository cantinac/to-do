define([
	'oolib'
], function(oolib){

	// console.log("baseview class")

	var BaseView = oolib.createClass({
		_create: function(args){
			// console.log("init baseview", args)
			var self = this;

			this.eventHandlers = {

			}

			this.model = args.model

			this.children = []

			this.template = args.template || null

			this.setElement(args.el)

			this.children = []

			this.childTarget = ".children"

			// console.log("init done", this.el, this.children, args.children)
		}
		, get: function(attr){
			return this[attr]
		}
		, set: function(attr, value){
			this[attr] = value
		}
		, setElement: function(selector){
			// console.log("setting element to", selector)
			this.el = document.querySelector(selector)
			if(!this.el) this.el = document.createElement("div")
			// console.log(this.el)
		}
		, findElement: function(selector){
			return this.el.querySelectorAll(selector)
		}
		, findOneElement: function(selector){
			return this.el.querySelector(selector)
		}
		, addChild: function(child){
			this.children.push(child)
			this.render()
		}
		, removeChild: function(child){
			var childIndex = this.children.indexOf(child)
			if(childIndex === -1) return;

			this.children.splice(childIndex, 1)

			this.render()
		}
		, renderTemplate: function(){

			var self = this
			, childDom
			, renderedTemplate = this.template( this.templateArgs() )

			// console.log("child elements ", self.childTarget, childTarget)

			//render template if element available
			if(this.el) this.el.innerHTML = renderedTemplate

			var childTarget = self.findOneElement(self.childTarget)

			// console.log("rendering children..", this.children)

			_(this.children).each(function(child){
				// console.log("child ", child)
				var el = document.createElement("div")
				child.render()
				// child.assignEvents()
				childTarget.appendChild(child.get("el"))	
				// child.set("el", el)
				
				// console.log("rendered child ", child.get("el"))
			})

			// console.log("done rendering")
		}
		, render: function(){
			// console.log("rendering..", this)
			//render template
			try{
			var rendered = this.renderTemplate()
			}catch(e){console.log(e)}
			// console.log("assign events..")
			//assign events
			this.assignEvents()
		}
		, templateArgs: function(){
			return {
				model: this.model
			}
		}
		, assignEvents: function(){
			var self = this
			, selector
			, elements
			, domEvent

			// console.log("assigning...", self.eventHandlers)

			//assign bound events to their respective dom elements
			for(selector in self.eventHandlers){
				_( self.findElement( selector ) ).each(function(element){
					for(domEvent in self.eventHandlers[selector]){
						// console.log("adding listener to ", element, " for event", domEvent)
						element.addEventListener(domEvent, _.bind(self.eventHandlers[selector][domEvent], self))
					}
				})
			}
		}
	})

	return BaseView

	

})  
