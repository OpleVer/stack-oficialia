;(function(ng) {
  'use strict';

  ng.module('SIOE')
    .service('nueva', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
