'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope) {
      $scope.name = "Cantina";

      var items = [
        {text:"buy milk", done: false}, 
        {text:"build app", done: false}, 
      ];

      $scope.items = items;

      $scope.addTodo = function() {
        $scope.items.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
      };

  });
