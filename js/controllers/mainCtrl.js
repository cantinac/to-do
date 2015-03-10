/**
 * Created by robertfrieden on 3/8/15.
 */

angular.module('app')
    .directive('ngPlaceholder', function() {
        return {
            restrict: 'A',
            scope: {
                placeholder: '=ngPlaceholder'
            },
            link: function(scope, elem, attr) {
                scope.$watch('placeholder',function() {
                    elem[0].placeholder = scope.placeholder;
                });
            }
        }
    })
    .controller('MainCtrl', function MainCtrl($scope, $filter,localStorageService) {
        'use strict';

        $scope.placeholder="What do you need to get done?";
        //Init test data
        var test=localStorageService.get('todoKey');
        if (!test){
            $scope.lstToDo=[
                {
                    completed: false,
                    description: "1st Item"
                },
                {
                    completed: true,
                    description: "2nd Item"
                }
            ]
            SaveList();
        }
        else{
            $scope.lstToDo=test;
        }

        $scope.AddNew=function(completed,description){
            var temp={
                completed: completed,
                description: description
            };
            if (description) {
                $scope.lstToDo.push(temp);
                SaveList();
                $scope.newTodo="";
            }

        };

        $scope.CLearAll=function() {
            $scope.lstToDo=[];
            SaveList();
        }

        $scope.clearCompleted=function(){

            var l=$scope.lstToDo;
            if (l.length<1) return;
            for (var i= l.length-1;i>=0;i--)
            {
                if(l[i].completed)
                {
                    l.splice(i,1);
                }
            }
            SaveList();
        }
        $scope.toggleCompleted=function(changedToDo)
        {
            var i=$scope.lstToDo.indexOf(changedToDo);
            $scope.lstToDo[i].completed=changedToDo.completed;
            SaveList();
        }

        function SaveList(){
            localStorageService.set('todoKey',$scope.lstToDo);
        }
    });