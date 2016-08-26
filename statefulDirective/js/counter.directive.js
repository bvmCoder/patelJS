(function() {
    'use strict';

    var counter = function counter() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                name: '@', // read only property which will be interpolated value
                count: '=' // '=count'
            },
            controller: 'CounterController as counter',
            template: `
                  <div class="counter">
                    {{ counter.name }}
                    <input type="text" ng-model="counter.count">
                    <button type="button" ng-click="counter.decrement();">
                      -
                    </button>
                    <button type="button" ng-click="counter.increment();">
                      +
                    </button>
                  </div>
                `
        };
    };

    angular
        .module('app')
        .directive('counter', counter);

})();
