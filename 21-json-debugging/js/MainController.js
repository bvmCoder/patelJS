var MainController = function MainController() {
  var self = this;
  self.person = {
    name: 'Amit Sharma',
    location: 'HoshiyaarPur, Punjab'
  };
};

angular
  .module('app')
  .controller('MainController', MainController);
