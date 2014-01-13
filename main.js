function TodoCtrl($scope) {


  $scope.todos = [{text: 'Feed the dog', done:false},{text: 'Build an awesome to-do app', done:false}
  ];

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };


  $scope.clearCompleted = function() {
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    });
  };

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.formTodoText, done:false})
    $scope.formTodoText = '';
  };
}