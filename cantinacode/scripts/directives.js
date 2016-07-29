'use strict';

var cantinaDirectives = angular.module('cantinaDirectives', []);

cantinaDirectives.directive('addtoscroll', function() {
    return {
        restrict: 'AE',
        scope: {
        	initiate:'='
        },
        templateUrl: 'directives/addtoscroll/addtoscroll.html',
        link: function(scope, element, attrs) {

			if(scope.initiate){ //this will allow preload data in the directive
        		scope.todoList=scope.initiate;
        	}else{
        		scope.todoList=[];
        	}
        	
			//This will add the value to array
        	scope.addValue=function(value){
        		if(value && value!=null && value!=undefined){
        			var newTask={'value':value, 'checked':false};
        			scope.todoList.push(newTask);

        			//clean the input after submit
        			scope.value='';
        		}else{
        			alert("Please type something first");
        		}
        		
        	}

			

        }

    };

});
