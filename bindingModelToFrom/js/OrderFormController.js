(function() {
    'use strict';

    var OrderFormController = function OrderFormController() {
        var self = this;

        self.products = [{
            label: 'Product One',
            id: 1
        }, {
            label: 'Product Two',
            id: 2
        }, {
            label: 'Product Three',
            id: 3
        }];
        self.onSubmit = function onSubmit() {
            // pre-processing
            self.submit();
        };
    };

    angular
        .module('app')
        .controller('OrderFormController', OrderFormController);

})();
