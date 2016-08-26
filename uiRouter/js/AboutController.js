(function() {
    'use strict';

    var AboutController = function AboutController() {
        var self = this;
        self.viewName = 'about view!';
    };

    angular
        .module('app')
        .controller('AboutController', AboutController);

})();
