(function() {
    'use strict';

    var MainController = function MainController() {
        var self = this;
        self.name = 'Afzal';
    };

    angular
        .module('app')
        .controller('MainController', MainController);

})();
