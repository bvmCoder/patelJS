(function() {
    'use strict';
    var UserController = function UserController($http) {
        var self = this;

        var API = 'http://jsonplaceholder.typicode.com/users/';
        self.userId = '';
        self.chosenUser = {};
        self.getUser = function getUser() {
            if (!self.userId) {
                return;
            }
            $http
                .get(API + self.userId)
                .then(function(response) {
                    self.chosenUser = response.data;
                }, function(reason) {
                    // error
                });
        };
    };

    angular
        .module('app')
        .controller('UserController', UserController);

})();
