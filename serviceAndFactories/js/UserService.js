(function() {
    'use strict';

    var UserService = function UserService($http) {

        var API = '//jsonplaceholder.typicode.com/users/';
        var _getUser = function _getUser(userId) {
            return $http
                .get(API + userId)
                .then(function(response) {
                    return response.data;
                }, function(reason) {
                    // error
                });
        };

        var _getAllUsers = function _getAllUsers() {

        };

        return {
            getUser: _getUser,
            getAllUsers: _getAllUsers
        };

    };

    angular
        .module('app')
        .factory('UserService', UserService);
})();
