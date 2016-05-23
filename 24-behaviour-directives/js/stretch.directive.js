var stretch = function stretch() {
  return {
    restrict: 'A',
    link: function link($scope, $element, $attrs) {
      var element = $element[0];
      element.addEventListener('focus', function () {
        this.style.width = 250;
      }, false);
      element.addEventListener('blur', function () {
        this.style.width = 120;
      }, false);
    }
  };
};

angular
  .module('app')
  .directive('stretch', stretch);
