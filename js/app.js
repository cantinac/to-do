'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.directives',
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      controller: 'MyCtrl1'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});

