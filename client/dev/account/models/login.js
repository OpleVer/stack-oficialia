;(function(ng) {
  'use strict';

  ng.module('SIOE')
    .factory('login', [
      function() {
        class login {
          constructor() {
            this.name = '';
            this.birthDate = null;
          }

          isValid() {
            return !!this.name && !!this.birthDate;
          }
        }

        return login;
      }
    ]);
}(window.angular));
