(function() {
    'use strict';


    var ErrorController = function ErrorController() {
        var self = this;

        self.list = [{
            message: 'Welcome to AngularJS 1.X',
            type: 'invalid'
        }, {
            message: 'Ohh No! Angular 2 has just released!',
            type: 'error'
        }, {
            message: 'Don\'t worry Learn ReactJS!',
            type: 'warning'
        }];
    };

    angular
        .module('app')
        .controller('ErrorController', ErrorController);

})();
