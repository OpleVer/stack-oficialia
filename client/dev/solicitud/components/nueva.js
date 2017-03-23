; (function (ng) {
  'use strict';

  ng.module('SIOE')
    .component('nueva', {
      templateUrl: 'solicitud/templates/nueva.html',
      controller: [function () {
        this.user = {
          name: 'world'
        };
      }]
    });
}(window.angular));
