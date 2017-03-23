;(function(ng) {
  'use strict';

  ng.module('SIOE')
    .service('login', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
