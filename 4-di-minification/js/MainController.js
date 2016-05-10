var MainController = function MainController(a, b) {
    a.name = 'Amit';
};


//MainController.$inject = ['$scope', '$rootScope'];

angular
    .module('app')
    .controller('MainController', [
        '$scope',
        '$rootScope',
        MainController
    ]);
