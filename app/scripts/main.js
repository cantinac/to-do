(function(){
  'use strict';

  var app = angular.module('cantinaTodo', ['ngAnimate']);


  function TodosController( $scope, $timeout ) {
    this.todoList = todos;
    $scope.inputError = false;
    $scope.errorMsg = "";

    
    // == Todo is checked/inchecked ==
    this.toggleComplete = function(id){
      for( var i=0; i<this.todoList.length; i++ ){
        if( this.todoList[i].id===id ){
          this.complVal = this.todoList[i].isComplete===true?false:true;
        }
      }
    };

    // == Add a new todo ==
    this.addTodo = function(){

      if( this.newTodo ){
        // -- Input field has value (could benefit from further sanity checks) --
        $scope.inputError = false;

        // -- check for doubles, get highest id --
        var maxId = 0;
        for( var i=0; i<this.todoList.length; i++ ){
          if( this.todoList[i].todo === this.newTodo ){
            this.showError("Error: Todo item already in list");
            return;
          }else{
            maxId = this.todoList[i].id>maxId?this.todoList[i].id:maxId;
          }
        }

        // -- add todo to data source --
        this.todoList.push(
          {
            "id": maxId+1, "isComplete": false, "todo": this.newTodo
          }
        );

        // -- clear input
        this.newTodo = null;

      }else{
        // -- Input field empty --
        this.showError("Error: Input field is empty");

      }

    }; // addTodo


    // == Trigger error alert ==
    this.showError = function(msg){

      $scope.inputError = true;
      $scope.errorMsg = msg;
      
      $timeout(function(){
        $scope.inputError = false;
      }, 2000);
    };


  }

  
  app.controller( "TodosController", [ "$scope", "$timeout", TodosController ] );

  



  // Data source generated with http://www.json-generator.com/
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
    "todo": "Make food"
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







