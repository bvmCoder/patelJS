var items = [1,2,3,4,5,6,7,8];
var val = ' and it\' index';
items.forEach(function(item, index) {
  console.log(item, val, index);
});

angular
  .module('app', []);
