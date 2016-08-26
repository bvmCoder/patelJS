(function() {
    'use strict';

    var MoviesController = function MoviesController() {
        var self = this;
        self.favorites = [{
            title: 'The Shawshank Redemption',
            year: '1994',
            popular: true,
            category: 'thriller'
        }, {
            title: 'Inception',
            year: '2010',
            popular: false,
            category: 'fantasy'
        }, {
            title: 'The Matrix',
            year: '1999',
            popular: true,
            category: 'fantasy'
        }, {
            title: 'Saving Private Ryan',
            year: '1998',
            popular: true,
            category: 'action'
        }, {
            title: 'The Aviator',
            year: '2004',
            popular: false,
            category: 'drama'
        }];
    };

    angular
        .module('app')
        .controller('MoviesController', MoviesController);

})();
