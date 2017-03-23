;(function(ng) {
  "use strict";

  ng.module("SIOE")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
        
      }
    ]);
}(window.angular));
