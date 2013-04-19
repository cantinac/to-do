'use strict';

/* Controllers */

function TodoCtrl($scope, userList) {
  $scope.listItems = userList;

  $scope.addItem = function() {
      if($scope.newEntry != "") {
        $scope.listItems.push({"order": $scope.listItems.length ? $scope.listItems.length : 0, "snippet": $scope.newEntry, "complete": false});
        // clear input box
        $scope.newEntry = "";
      }
      else
      {

      }
  };
  $scope.deleteItem = function (idx) {
    if($scope.listItems.length) {
      $scope.listItems.splice($scope.listItems.length - idx, 1);
      //console.log("recd " + idx + " deleting " + $scope.listItems.length).toInt() - ;
    }
  };

  $scope.clearCompleted = function() {
//    var oldItems = $scope.listItems;
//    $scope.listItems = [];
    for(var i = 0; i < $scope.listItems.length; i++) {
      console.log("i=" + i + "/li=" + $scope.listItems[i]);
      if ($scope.listItems[i].complete) $scope.listItems.pop(i);
    }
  };

  $scope.enableClear = function() {
     return $scope.listItems.length > 0;   
  }; 

  $scope.orderProp = "order";
}
