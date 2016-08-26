(function() {
    'use strict';

    var mgStretch = function mgStretch() {

        return {
            restrict: 'A',
            link: function link($scope, $element, $attrs) {
                console.dir($element);

                var element = $element[0];

                console.dir(element);
                element.addEventListener('focus', function() {
                    this.style.width = 250 + 'px';
                    this.style.padding = '4px 2px';
                    this.style.outline = 'red auto 2px';
                    console.dir(this.style);
                }, false);
                element.addEventListener('blur', function() {
                    this.style.width = 120 + 'px';
                    this.style.padding = '1px';
                    this.style.outline = 'none';
                }, false);
            }
        };

    };

    angular
        .module('app')
        .directive('mgStretch', mgStretch);

})();
