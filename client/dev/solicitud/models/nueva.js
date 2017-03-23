;(function(ng) {
  'use strict';

  ng.module('SIOE')
    .factory('nueva', [
      function() {
        class nueva {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return nueva;
      }
    ]);
}(window.angular));
