'use strict'; 
angular.module('ToDo', [])
.controller('todoCtrl', ['$scope', function($scope){
  $scope.todos = [
    {'title' : 'Take out the trash', 'done' : false},
    {'title' : 'Do the dishes', 'done' : false},
    {'title' : 'Write some code', 'done' : true}
  ];

  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newTodo, 'done':false})
    $scope.newTodo = ''
  }

  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done
    })
  }
}])