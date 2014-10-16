function TodoCtrl($scope) {
	$scope.todos = [];
	
	$scope.addTodo = function(isValid){
		if (isValid) {
			$scope.todos.push({text:$scope.formTodoText,
			done:false
			});
			$scope.formTodoText = '';
		};
	};
	
	$scope.removeTodo = function(todo){
		var index = $scope.todos.indexOf(todo)
		$scope.todos.splice(index,1);
	};
}