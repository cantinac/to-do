(function() {
  var app = angular.module('todoList', []);

  app.controller('MainController', function() {
    
  });

  app.controller("ListController", function(){
    this.list = {};

    this.addList = function(){
      list.push(this.todo);
      this.list = {};
    };
  });


})();
