angular.module("httpUser", ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/httpUser", {
        templateUrl: "views/httpUser/list.html",
        controller: "httpUserCtrl"
      })
      .when("/httpUser/cart", {
        templateUrl: "views/httpUser/cart.html",
        controller: "httpUserCtrl"
      })
      .when("/httpUser/cart/:idx", {
        templateUrl: "views/httpUser/show.html",
        controller: "httpUserCtrl"
      })


  });
