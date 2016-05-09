var SubController = function SubController($scope, $rootScope) {
  $scope.name = 'Afzal';
  $scope.lastName = 'Sharma';

  var self = this;
  self.firstName = 'Afzal';
  self.lastName = 'Agwan';
}



SubController.$inject = ['$scope', '$rootScope'];
angular
.module('app')
.controller('SubController', SubController);
