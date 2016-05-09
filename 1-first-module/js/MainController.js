// this is called a getter

var MainController = function MainController($scope, $rootScope) {
  $scope.name = 'Amit';

  $scope.firstName = 'Agwan';

  var self = this;

  self.firstName = 'Amit';
  self.lastName = 'Sharma';


  this.name = 'Dixit';
  console.log($scope);
  console.log($rootScope);
}

MainController.$inject = ['$scope', '$rootScope'];
angular
.module('app')
.controller('MainController', MainController);






// var MainController = function MainController($scope, $rootScope) {
//   var self = this;
//   // || we can use this directly
//
//   $scope.name = 'Amit';
//
//   self.name = 'Amit';
//
//   self.likes = ['Pizza', 'Coke'];
// };
//
// MainController.$inject = ['$scope', '$rootScope'];
//
// angular
//   .module('app')
//   .controller('MainController', MainController);
