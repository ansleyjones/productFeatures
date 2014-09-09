angular.module("mainProdModule",
  [
    "localProdSvc",
    "ngRoute",
    "ui.bootstrap"
  ])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeCtrl"
      })
      .when("/productLocal", {
          templateUrl: "views/localProducts/list.html",
          controller: "localProdCtrl"
      })
      .otherwise({
        redirectTo: "/"
      })
  });
