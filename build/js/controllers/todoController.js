function TodoController ( $scope ) {

  // array storing a list of todo objects
  $scope.todos = [
                              { description: 'This is my first task', completed: false },
                              { description: 'This is my second task', completed: true },
                              { description: 'This is my third task', completed: false }
                           ];

  // method to add new todo's
  $scope.addTodo = function() {
    $scope.todos.push( { description: $scope.inputTodoDescription, completed: false } );
    $scope.inputTodoDescription = ""; // clear input box
  };

  // method to determine todo status
  $scope.getStatus = function( todo ) {
    if ( todo.completed ) {
      return 'complete';
    } 
    return 'incomplete';
  }; 

}