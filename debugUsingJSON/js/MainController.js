(function() {
    'use strict';
    var MainController = function MainController() {
        var self = this;
        self.person = {
            name: 'Amandeep Chabra',
            location: 'HoshiyaarPur, Punjab'
        };
    };

    angular
        .module('app')
        .controller('MainController', MainController);

})();
