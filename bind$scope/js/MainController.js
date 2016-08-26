(function() {
    'use strict';
    var MainController = function MainController($scope) {
        var self = this;
        self.name = 'Dixit Patel';
        $scope.name = 'Amit';
    };

    angular
        .module('app')
        .controller('MainController', MainController);

})();
