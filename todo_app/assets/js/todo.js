(function(){
	var app = angular.module('todo', []);

	app.controller('TodoController', function($scope){
		$scope.items = items;

		//after passing validation, submitted text is pushed to items array, reset text field
		$scope.addTodo = function(){
			$scope.items.push({description:$scope.todoDescription, checked: false})
			$scope.todoDescription = null;
		};

		$scope.deleteTodo = function(item){
			//have to use indexOf due to ordering by checked
			var answer = confirm("Are you sure you want to delete this?");
			
			if(answer){
				var index = $scope.items.indexOf(item);
				if(index != -1){
					$scope.items.splice(index, 1);
				}
			}
			else
			{
				return false;
			}			
		};
	});

	var items = [
		{
			description: 'Learn Angular',
			checked: false,
		},
		{
			description: 'Get the bread and milk',
			checked: false,
		}
	];
})();