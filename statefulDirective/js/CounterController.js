(function() {
    'use strict';

    var CounterController = function CounterController() {
        var self = this;
        console.log(self.name);
        console.log(self.count);
        self.increment = function increment() {
            self.count++;
        };
        self.decrement = function decrement() {
            self.count--;
        };
    };

    angular
        .module('app')
        .controller('CounterController', CounterController);

})();
