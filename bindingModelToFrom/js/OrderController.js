(function() {
    'use strict';

    var OrderController = function OrderController() {
        var self = this;

        self.customerOrder = {
            name: '',
            email: '',
            location: '',
            product: {
                label: '',
                id: ''
            },
            comments: ''
        };
        self.submitOrder = function submitOrder() {
            // communicate with API
            console.log('Submitted!', self.customerOrder);
        };
    };

    angular
        .module('app')
        .controller('OrderController', OrderController);

})();
