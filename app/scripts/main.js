(function(){

  var app = angular.module('cantinaTodo', []);

  app.controller('todosController', function(){
    this.todoList = todos;
  });



  // generated with http://www.json-generator.com/
  var todos = [
  {
    "id": 1,
    "isComplete": true,
    "todo": "Complete good things"
  },
  {
    "id": 2,
    "isComplete": false,
    "todo": "Have a coffee with something"
  },
  {
    "id": 3,
    "isComplete": false,
    "todo": "Go food"
  },
  {
    "id": 4,
    "isComplete": true,
    "todo": "Have a coffee with good things"
  },
  {
    "id": 5,
    "isComplete": true,
    "todo": "Make travelling"
  },
  {
    "id": 6,
    "isComplete": false,
    "todo": "Consider travelling"
  },
  {
    "id": 7,
    "isComplete": false,
    "todo": "Go a lot"
  },
  {
    "id": 8,
    "isComplete": false,
    "todo": "Consider good things"
  },
  {
    "id": 9,
    "isComplete": true,
    "todo": "Go travelling"
  }
];


})();







