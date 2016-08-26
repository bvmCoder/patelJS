var movieReleases = [
    {
        category: "New Releases",
        movies: [{
            "id": 65432445,
            "title": "Titanic",
            "boxart": "http://www.imdb.com/title/tt0120338/?ref_=fn_al_tt_1",
            "uri": "http://api.imdb.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 654356453,
            "title": "Avatar",
            "boxart": "http://www.imdb.com/title/tt0499549/?ref_=tt_rec_tt",
            "uri": "http://api.imdb.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }]
    },
    {
        category: "Dramas",
        movies: [{
            "id": 70111470,
            "title": "The Dark Knight",
            "boxart": "http://www.imdb.com/title/tt0468569/?ref_=nv_sr_1",
            "uri": "http://api.imdb.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
        }, {
            "id": 675465,
            "title": "Iron Man",
            "boxart": "http://www.imdb.com/title/tt0371746/?ref_=nv_sr_1",
            "uri": "http://api.imdb.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{
                id: 432534,
                time: 65876586
            }]
        }]
    }];





Array.prototype.concatAll = function concatAll() {
    var outPut = [];
    var self = this;
    this.forEach(function(array) {
        outPut.push(...array); // here I am using ECMA Script 6 Feature
    });

    return outPut;
};

var multiDimArray = [ [12,15,17], [2,4,6], [5,3,1] ];
var flatArray = multiDimArray.concatAll();
console.log(flatArray);

var movieReleases = [
            {
                category: "New Releases",
                movies : [
                    {
                        "id": 65432445,
                        "title": "Titanic",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Avatar",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            },
            {
                category: "Dramas",
                movies: [
                    {
                        "id": 70111470,
                        "title": "The Dark Knight",
                        "boxarts": [
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Iron Man",
                        "boxarts": [
                            { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id: 432534, time: 65876586 }]
                    }
                ]
            }
        ];
console.log(movieReleases);

    var newConcat = movieReleases.
      map(function(pairedMovie) {
        return pairedMovie.movies.
          map(function(movie) {
            return movie.boxarts.
              filter(function(boxart) {
                return boxart.width === 150;
              }).
              map(function(boxart){
                 return {id: movie.id, title: movie.title, boxart: boxart.url};
              });
          }).concatAll();
      }).concatAll();

console.log(newConcat);
