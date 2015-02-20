var todo = angular.module('todo', []);

todo.controller('TodoController', ['$scope', function($scope) {
  $scope.items = []

  $scope.createTodo = function() {
    if ($scope.title) {
      $scope.items.unshift({title: $scope.title, complete: false});
    }
    $scope.title = '';
  };
}]);
