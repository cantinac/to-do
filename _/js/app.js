angular.module('todo', []). 

controller('todoController', ['$scope', function ($scope){
  $scope.todos = [];

  //add new tasks to lists of tasks
  $scope.addtodo = function(){
    $scope.todos.push({'title':$scope.newtodo,'done':false})
    $scope.newtodo = '' 
  }

  $scope.deactivate = function(){}

}])
    