'use strict';

function trim1 (str) {
  /*
    Steven Levithan's Faster JavaScript Trim method
    http://blog.stevenlevithan.com/archives/faster-trim-javascript
  */
  return String(str).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

/* Controllers */
function TodoCtrl($scope, userList) {
  /* Initialize list to the user's local list module */
  $scope.listItems = userList;

  $scope.addItem = function() {
    /* Adds content from newEntry into new list item */
    if($scope.newEntry) {
      var newSnippet = trim1($scope.newEntry);

      if(newSnippet !== "") {
        /* Add list item, incrementing value of order */
        $scope.listItems.push({"order": $scope.getNextOrder(), "snippet": newSnippet, "complete": false});
        /* Reset newEntry for fresh input */
        $scope.newEntry = "";
      }
    }
  };

  $scope.deleteItem = function (order) {
    /* Remove item of passed value order */
    for(var i = 0; i < $scope.listItems.length; i++) {
      if ($scope.listItems[i].order === order) 
      {
        $scope.listItems.pop(i);
      }
    }
  };

  $scope.getNextOrder = function() {
    /* Return next usable order value to maintain unique key order */
    var maxOrder = -1;
    for(var i = 0; i < $scope.listItems.length; i++) {
      if ($scope.listItems[i].order > maxOrder) 
      {
        maxOrder = $scope.listItems[i].order;
      }
    }
    return ++maxOrder;
  };

  $scope.clearCompleted = function() {
    /* Remove completed items from list */
    for(var i = 0; i < $scope.listItems.length; i++) {
      if ($scope.listItems[i].complete) 
      {
        $scope.listItems.pop(i);
      }
    }
  };

  $scope.getCompleteCount = function() {
    /* Returns number of items marked complete in list */
    var completeItems = 0;

    for(var i = 0; i < $scope.listItems.length; i++) {
      if ($scope.listItems[i].complete) 
      {
        completeItems++;
      }
    }
    return completeItems;
  }; 

  $scope.enableClear = function() {
    /* Determine if any list items which qualify for clearing */
    return ($scope.getCompleteCount() > 0);
  };


  $scope.orderProp = "order";
}
