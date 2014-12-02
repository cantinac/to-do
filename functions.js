function MakeList($scope) {
  
  $scope.list = [
	{text:'An incomplete list item should look like this', done:false},         
	{text:'An incomplete list item should look like this', done:false},    
    {text:'An incomplete list item should look like this', done:false},    
    {text:'An incomplete list item should look like this', done:false},  
    {text:'A incomplete list item should look like this', done:true},
    {text:'A complete list item should look like this', done:true},
    {text:'A complete list item should look like this', done:true},
    {text:'A complete list item should look like this', done:true},
    {text:'A complete list item should look like this', done:true},               
  	];

  $scope.addItem = function () {
    $scope.list.push({text:$scope.formItemText, done:false});
    $scope.formItemText = '';
  };
}