(function() {
    'use strict';

    var CounterController = function CounterController() {
        var self = this;
        self.count = 1;
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
