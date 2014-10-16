function TodoCtrl($scope) {
	$scope.todos = [];
	
	$scope.addTodo = function(isValid){
		if (isValid) {
			$scope.todos.push({
			text:$scope.formTodoText,
			done:false,
			checked:false
			});
			$scope.formTodoText = '';
		};
	};
	
	$scope.removeTodo = function(todo){
		var index = $scope.todos.indexOf(todo)
		$scope.todos.splice(index,1);
	};
	
	$scope.toggleTodo = function(todo){
		var index = $scope.todos.indexOf(todo);
		if ($scope.todos[index].done === false) { 
			$scope.todos[index].done = true;
			$scope.todos[index].checked = true; 
			} else {
			$scope.todos[index].done = false;
			$scope.todos[index].checked = false;
		};
	};
	
};