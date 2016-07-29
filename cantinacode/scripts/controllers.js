'use strict';

var cantinaControllers = angular.module('cantinaControllers', []);




cantinaControllers.controller('page1Ctrl',['$scope', function ($scope) {

		
  		
		//Use this value to initiate the addtoscroll directive
  		$scope.previousValues=[
	  		{'value':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 'checked':true},
	  		{'value':'Sed vitae gravida justo. Aliquam a consectetur sem.',       'checked':true},
	  		{'value':'Etiam pretium efficitur tincidunt',                         'checked':false},
	  		{'value':' Nullam pharetra nec felis nec tincidunt',                  'checked':false}
  		];

  }]);


