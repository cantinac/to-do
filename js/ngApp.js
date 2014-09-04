angular.module('ngApp',[])
.controller('ngAppController',function($scope,$http)
{
	$scope.todo = {};
	$scope.todos = [];
	$scope.addTodo = function()
	{
		$scope.todo.completed=0;
		$scope.todos.push($scope.todo);
		$scope.todo = {};
	}
	$scope.toggleComplete = function(todoLink)
	{
		todoLink.theTodo.completed=!todoLink.theTodo.completed;
	}
});