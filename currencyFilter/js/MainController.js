(function() {
    'use strict';
    var MainController = function MainController() {
        var self = this;
        self.myAmount = 209.82;
    };

    angular
        .module('app')
        .controller('MainController', MainController);

})();
