angular.module('app', [])
  .controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [
      { name: 'Learn Javascript', completed: true },
      { name: 'Learn Angular.js', completed: false },
      { name: 'Love this tutorial', completed: true },
      { name: 'Learn Javascript design patterns', completed: false },
      { name: 'Build Node.js backend', completed: false },
    ];
  }]);