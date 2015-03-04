var app = angular.module('Todo', []);
app.controller('CantinaTodo', function($scope) {
  $scope.newTodo = '';
  $scope.todos = [
    'Fork Cantina', 
    'Eat Tacos',
  ];
  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };
  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }  
  };
});