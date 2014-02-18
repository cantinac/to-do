//what a great guy! right to the focus
window.onload = function() {
  document.getElementById("addItem").focus();
};


angular.module('myApp',[])
.controller('ToDoController',['$scope',function($scope){

	$scope.itemList = [
		{'name':'build an app', 'complete': 'false'},
		{'name':'go to hassle', 'complete': 'false'}
	];

	$scope.addItem = function(){

		console.log($scope.newItem)

		if($scope.newItem){
			$scope.itemList.push({ "name": $scope.newItem, "complete": 'done'} );
			$scope.newItem = "";	
		}else{
			alert('Looks like you left your list item empty whoops! Please try again.')
		}



	}


}]);

