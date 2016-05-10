var SubController = function SubController($scope, $rootScope) {
  $scope.firstName = 'Afzal';
  $scope.lastName = 'Agwan';

  var self = this;
  this.firstName = 'Samreen';
  this.lastName = 'Saleem';
};



SubController.$inject = ['$scope', '$rootScope'];
angular
.module('app')
.controller('SubController', SubController);
