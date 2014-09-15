
//controller collection
var todoControllers = angular.module('todoControllers', []);

//main controller
todoControllers.controller('todoController', function ($scope) {
  $scope.message = "put todos here";
      });