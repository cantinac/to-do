var TodoItem = (function () {
    function TodoItem(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    return TodoItem;
})();
var TodoCtrl = (function () {
    function TodoCtrl($scope) {
        this.$scope = $scope;
        this.todos = [];
        $scope = this;
    }
    TodoCtrl.prototype.addTodo = function () {
        var item = new TodoItem(this.todoText, false);
        this.todos.push(item);
        this.todoText = '';
    };
    return TodoCtrl;
})();
function resizer($window) {
    return function checkWidth(scope) {
        scope.width = $window.innerWidth;
        if(scope.width <= 720) {
            scope.addButtonLabel = "+";
        } else {
            scope.addButtonLabel = "Add To-do";
        }
        angular.element($window).bind('resize', function () {
            scope.$apply(function () {
                scope.width = $window.innerWidth;
                if(scope.width <= 720) {
                    scope.addButtonLabel = "+";
                } else {
                    scope.addButtonLabel = "Add To-do";
                }
            });
        });
    }
}
var app = angular.module("app", [
    'ui.bootstrap'
]);
app.controller("TodoCtrl", [
    "$scope", 
    TodoCtrl
]);
app.directive('resize', [
    "$window", 
    resizer
]);
//@ sourceMappingURL=todoControl.js.map
