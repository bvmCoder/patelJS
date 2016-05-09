function MainController(a, b) {
  a.name = 'Amit';
}

angular
  .module('app')
  .controller('MainController', [
    '$scope',
    '$rootScope',
    MainController
  ]);
