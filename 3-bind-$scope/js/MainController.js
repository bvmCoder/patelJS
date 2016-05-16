var MainController = function MainController($scope) {
  $scope.name = 'Amit';
};

angular
  .module('app')
  .controller('MainController', MainController);
