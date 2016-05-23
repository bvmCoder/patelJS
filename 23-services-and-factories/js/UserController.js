function UserController(UserService) {
  var self = this;
  this.userId = '';
  this.chosenUser = {};
  this.getUser = function getUser() {
    if (!this.userId) {
      return;
    }
    UserService
      .getUser(this.userId)
      .then(function (response) {
        self.chosenUser = response;
      })
  };
}

angular
  .module('app')
  .controller('UserController', UserController);
