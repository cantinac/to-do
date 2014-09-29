var app = angular.module('CantinaApp', []);

app.controller('CantinaController', ['$scope', function($scope) {

	$scope.items = [
			{
				text : 'An incomplete to-do list item',
				completed : false
			}
		,	{
				text : 'A complete to-do list item',
				completed : true 
			}
	];

	this.addItem = function() {
			$scope.items.push({
								text : $scope.item,
								completed : false
							});
			$scope.item = '';
		}
}]);
