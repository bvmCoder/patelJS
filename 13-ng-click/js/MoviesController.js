function MoviesController() {
  //var self = this;
  this.likesList = [];

  this.unlike = function (index) {
    this.likesList.splice(index, 1);
  };

  this.addToLikes = function (movie) {
    this.likesList.unshift(movie);
  };

  this.favorites = [{
    title: 'The Shawshank Redemption',
    year: '1994'
  }, {
    title: 'Inception',
    year: '2010'
  },{
    title: 'The Matrix',
    year: '1999'
  }, {
    title: 'Saving Private Ryan',
    year: '1998'
  }, {
    title: 'The Aviator',
    year: '2004'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
