'use strict';

// Declare app level module
var todoApp = angular.module('todoApp', [])
.factory('userList', function($rootScope, localStorage) {

  var LOCAL_STORAGE_ID = 'todoUserList',
      listString = localStorage[LOCAL_STORAGE_ID];
  console.log(listString);
  var userList = listString ? JSON.parse(listString) : [];

  $rootScope.$watch(function() { return userList; }, function() {
    localStorage[LOCAL_STORAGE_ID] = JSON.stringify(userList);
  }, true);

  return userList;
});
