/**
 * Created by chris on 3/15/14.
 */

/// <reference path='types/angular.d.ts' />
/// <reference path='types/angular-ui-bootstrap.d.ts' />

class TodoItem {
    constructor(public title:string, public completed:boolean){

    }
}

class TodoCtrl {

    todos:TodoItem[] = [];
    todoText:string;

    constructor(private $scope){
        $scope = this;
    }

    public addTodo() {
        var item:TodoItem = new TodoItem(this.todoText, false);
        this.todos.push(item);
        this.todoText = '';
    }

}

function resizer($window) {
    return function checkWidth(scope) {
        scope.width = $window.innerWidth;
        if (scope.width <= 720)
        {
            scope.addButtonLabel = "+";
        } else {
            scope.addButtonLabel = "Add To-do";
        }
        angular.element($window).bind('resize', function () {
            scope.$apply(function () {
                scope.width = $window.innerWidth;
                if (scope.width <= 720)
                {
                    scope.addButtonLabel = "+";
                } else {
                    scope.addButtonLabel = "Add To-do";
                }
            });
        });
    };
}


var app = angular.module("app", ['ui.bootstrap']);
app.controller("TodoCtrl", ["$scope", TodoCtrl]);
app.directive('resize', ["$window", resizer]);