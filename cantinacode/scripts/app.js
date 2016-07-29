'use strict';


var cantinaApp = angular.module('cantinaApp', ['ngRoute','cantinaControllers','cantinaDirectives']);


//In this case will be only one page, and the pge will only consume the directive
cantinaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/page1.html',
            controller: 'page1Ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);
