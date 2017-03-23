; (function (ng) {
  'use strict';

  ng.module('SIOE')
    .component('login', {
      templateUrl: 'account/templates/login.html',
      controller: [function () {
        this.user = {
          name: 'world'
        };
      }]
    });
}(window.angular));
