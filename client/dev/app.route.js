;(function(ng) {
  "use strict";

  ng.module("SIOE")
    .config([
      "$routeProvider",
      function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "todo/templates/todo.html",
            controller: "TodoController",
            controllerAs: "todoCtrl"
          })
          .otherwise({
            redirectTo: "/"
          });
      }
    ]);
}(window.angular));
