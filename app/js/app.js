'use strict';

// Declare app level module
var todoApp = angular.module('todoApp', [])
.factory('userList', function($rootScope, localStorage) {

  /* Initialize list to user's local storage */
  var LOCAL_STORAGE_ID = 'todoUserList',
      listString = localStorage[LOCAL_STORAGE_ID];
  var userList = listString ? JSON.parse(listString) : [];

  /* Bind list modifications to user's local storage */
  $rootScope.$watch(function() { return userList; }, function() {
    localStorage[LOCAL_STORAGE_ID] = JSON.stringify(userList);
  }, true);

  return userList;
});
