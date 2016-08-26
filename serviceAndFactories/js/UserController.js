var UserController =  function UserController(UserService) {
    var self = this;
    self.userId = '';
    self.chosenUser = {};
    self.getUser = function getUser() {
        if (!self.userId) {
            return;
        }
        UserService
            .getUser(this.userId)
            .then(function(response) {
                self.chosenUser = response;
            });
    };
};

angular
    .module('app')
    .controller('UserController', UserController);
