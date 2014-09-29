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

	this.toggleCheck = function(e) {
			var i
			,	isChecked = false
			,	elem = e.target
			;

			// make sure the target elem is the li
			if (elem.nodeName !== "LI") {
				elem = elem.parentElement;
			}


			// check if the li is checked 
			if(elem.className.indexOf("true") > 0) {
				isChecked = true;
			}

			// check or uncheck
			if ( isChecked ){
				elem.children[0].checked = false;
				elem.className = elem.className.replace("true");
			}else{
				elem.children[0].checked = true;
				elem.className = elem.className + " true";
			}
		}

	// update the submit button by orientation
	this.updateSubmitByOrientation = function(orientation){
		if (orientation === "portrait") {
			document.form.submit.value = '+';
			document.body.className = "portrait";
		}
	}


	// basic function for detecting orientation
	this.checkOrientation = function() {
		var orientation = 'landscape';
		if (window.innerHeight > window.innerWidth) {
			orientation = 'portrait';
		}

		this.updateSubmitByOrientation(orientation);
		}
	// check orientation on bootstrap
	this.checkOrientation();
}]);

