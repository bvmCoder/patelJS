var MoviesController = function MoviesController() {
  var self = this;

  this.newTitle = ''; // empty string initially
  this.newRelease = ''; // empty string initially

  this.addMovie = function addMovie() {
    this.favorites.unshift({
      title: this.newTitle,
      year: this.newRelease
    });
    this.newTitle = this.newRelease = '';

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
};

angular
  .module('app')
  .controller('MoviesController', MoviesController);

  //this.newTitle = this.newRelease = '';
