(function() {
    'use strict';

    var OrderController = function OrderController() {
        var self = this;

        self.orderNameOne = 'Coca-cola';
        self.orderNameTwo = 'Pepsi-cola';
        self.orderQuantityOne = 5;
        self.orderQuantityTwo = 5;
    };

    angular
        .module('app')
        .controller('OrderController', OrderController);

})();
