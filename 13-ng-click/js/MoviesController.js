var MoviesController = function MoviesController() {
    var self = this;
    self.likesList = [];

    self.unlike = function unlike(index) {
        self.likesList.splice(index, 1);
    };

    self.addToLikes = function addToLikes(movie) {
        self.likesList.push(movie);
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
