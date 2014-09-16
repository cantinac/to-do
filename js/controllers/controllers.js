
//controller collection
var todoControllers = angular.module('todoControllers', []);

    
  //main controller
  todoControllers.controller('todoController', function ($scope, $filter, storageService) {
    //clear the taskInput
    $scope.taskInput='';
     
    $scope.$watch('tasks', function (newValue, oldValue) {
      $scope.remainingCount = $filter('filter')(tasks, { completed: false }).length;
      $scope.completedCount = tasks.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;
      if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
        storageService.put(tasks);
      }
    }, true);

      var tasks = $scope.tasks = storageService.get();


    $scope.addTask = function () {
       newtask = $scope.taskInput.trim();
      console.log("newtask: " + newtask)
      if (!newtask.length) {
        console.log('no length');
        return;
      }

      tasks.push({
        title: newtask,
        completed: false
      });

      for (task in tasks){
        console.log(tasks[task].title);
      }

      $scope.taskInput = '';
  };
});
