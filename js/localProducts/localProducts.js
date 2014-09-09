angular.module("localProdSvc",["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/productLocal", {
                templateUrl: "views/localProducts/list.html",
                controller: "localProdCtrl"
            })
            .when("/productLocal/new", {
                templateUrl: "views/localProducts/create.html",
                controller: "localProdCtrl"
            })
            .when("/productLocal/:idx", {
                templateUrl: "views/localProducts/show.html",
                controller: "localProdCtrl"
            })
            .when("/productLocal/:idx/edit", {
                templateUrl: "views/localProducts/edit.html",
                controller: "localProdCtrl"
            });

    });
