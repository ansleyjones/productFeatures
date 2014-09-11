angular.module("mainProdModule",
  [
    "localProdSvc",
    "httpAdmin",
    "httpUser",
    "ngRoute",
    "ui.bootstrap"
  ])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeCtrl"
      })
      .when("/httpAdmin", {
          templateUrl: "views/httpAdmin/list.html",
          controller: "httpAdminCtrl"
      })
      .otherwise({
        redirectTo: "/"
      })
  });
