var storageInterface = {
	
	loadStore: function() {
		var todosArray = new Array();
		for (var i = 0, l = localStorage.length; i < l; i++) {
			var key = localStorage.key(i),
				value = JSON.parse(localStorage[key]);
			todosArray.push(value);
		}
		return todosArray;
	},

	writeData: function(todoArray) {
		for (var i = 0, l = todoArray.length; i < l; i++) {
			var value = JSON.stringify(todoArray[i]);
			localStorage.setItem(i, value);
		}
	},
		
	length: function() {
		return localStorage.length;
	}

}

function todoController($scope) {
	
	// Load todos from local storage
	$scope.todos = storageInterface.loadStore();

	// Add a new todo!
	$scope.newTodo = function() {
		$scope.todos.push({entry:$scope.todoEntry, complete:false});
		$scope.todoEntry = '';
		storageInterface.writeData($scope.todos);
	};

	// Update status
	$scope.changeStatus = function(todo) {
		todo.complete = !todo.complete;
		$scope.current = todo;
		storageInterface.writeData($scope.todos);
	};	

}