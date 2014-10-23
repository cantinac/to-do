require.config({
	paths: {
		'backbone': 'bower_components/backbone/backbone'
		, 'underscore': 'bower_components/underscore/underscore'
		, 'handlebars': 'bower_components/handlebars/handlebars'
		, 'oolib': 'bower_components/oolib/oolib-amd'
		, 'jquery': 'jquery-not-used'
	}
})

var loadMainDeps = [
	'js/views/TodoListView'
	, 'backbone'
	, 'handlebars'
]
, loadMain = function(TodoListView, Backbone, handlebars){

	// console.log(arguments)

	try{

	var v1 = new TodoListView({
		el: "#main"
	})

	v1.render()


	}catch(e){console.log(e)}

};

require(loadMainDeps, loadMain, function(err){
	var failedId = err.requireModules && err.requireModules[0];
	console.log("there was an error loading dependencies", failedId)
})