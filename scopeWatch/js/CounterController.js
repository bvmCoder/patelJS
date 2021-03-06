(function() {
    'use strict';

    var CounterController = function CounterController($scope) {
        var self = this;

        self.count = 0;
        self.countList = [];
        self.increment = function increment(){
           self.count++;
           self.countList.push({ id: self.count });
        };

        self.decrement = function decrement(){
           self.count--;
           self.countList.pop({ id: self.count });
        };

        $scope.$watchCollection(angular.bind(self, function () {
            return self.countList;
        }), function(newValue, oldValue) {
            if(newValue === oldValue) return ;

            console.log(newValue, oldValue);
        });
    };

    CounterController.$inject = ['$scope'];

    angular
        .module('app')
        .controller('CounterController', CounterController);

})();
