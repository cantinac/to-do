function TodoCtrl($scope) {
  
	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.inputTodoText, complete:false});
		$scope.inputTodoText = '';
	};
	
	$scope.todos = [
		{text:'An incomplete to-do list item will look like this', complete:false},
		{text:'A complete to-do list item will look like this', complete:true}
	];
}