var MainController = function MainController($scope, $rootScope) {
  var self = this;
  // || we can use this directly

  $scope.name = 'Amit';

  self.name = 'Amit';

  self.likes = ['Pizza', 'Coke'];
};

MainController.$inject = ['$scope', '$rootScope'];

angular
  .module('app')
  .controller('MainController', MainController);
