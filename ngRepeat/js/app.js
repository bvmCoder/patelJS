(function() {
    'use strict';

    var items = [1, '2', 3, '4', 5, '6', 7, 'Patel'];

    var val = ' and it\' index';
    items.forEach(function(item, index, items) {
        console.log(item, val, index);
    });


    // for(var i = 0; i < items.length; ++i){
    //   console.log(items[i] + ' and it\'s index is: ' + i);
    // }
    // setter for the main module
    angular
        .module('app', []);

})();
