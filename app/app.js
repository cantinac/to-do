function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Work at Cantina', done:false},         
    {text: 'Another todo element', done:false}
  ];
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
}
