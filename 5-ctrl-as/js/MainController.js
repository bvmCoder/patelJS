function MainController() {
  this.name = 'Main';
}

angular
  .module('app')
  .controller('MainController', MainController);
