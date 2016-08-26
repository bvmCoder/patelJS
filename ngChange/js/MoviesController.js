(function() {
    'use strict';

    var MoviesController = function MoviesController() {
        var self = this;

        self.newTitle = '';
        self.newRelease = '';

        self.onChange = function onChange() {
            console.log('Change!', self.newTitle);
        };
        self.addMovie = function addMovie() {
            self.favorites.unshift({
                title: self.newTitle,
                year: self.newRelease
            });
        };

        self.favorites = [{
            title: 'The Shawshank Redemption',
            year: '1994'
        }, {
            title: 'Inception',
            year: '2010'
        }, {
            title: 'The Matrix',
            year: '1999'
        }, {
            title: 'Saving Private Ryan',
            year: '1998'
        }, {
            title: 'The Aviator',
            year: '2004'
        }];
    };

    angular
        .module('app')
        .controller('MoviesController', MoviesController);

})();
