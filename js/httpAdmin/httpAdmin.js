angular.module("httpAdmin", ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/httpAdmin", {
        templateUrl: "views/httpAdmin/list.html",
        controller: "httpAdminCtrl"
      })
      .when("/httpAdmin/new", {
        templateUrl: "views/httpAdmin/create.html",
        controller: "httpAdminCtrl"
      })
      .when("/httpAdmin/:idx", {
        templateUrl: "views/httpAdmin/show.html",
        controller: "httpAdminCtrl"
      })
      .when("/httpAdmin/:productId/edit", {
        templateUrl: "views/httpAdmin/edit.html",
        controller: "httpAdminCtrl"
      })

  });
