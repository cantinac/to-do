var app = angular.module('ToDo', []);

app.controller('TodoCtrl', function($scope) {
  
  $scope.todos = [
    {text:'Sample to-do list item', done:false},         
  ];
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  }; 
     
});
