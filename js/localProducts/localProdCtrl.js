angular.module("localProdSvc")
    .controller("localProdCtrl", function ($rootScope, $scope, $log, $routeParams, $location, localProdSvc) {
      $scope.products = localProdSvc.getProds();

      $scope.idxProd = localProdSvc.getProd($routeParams.idx);

      $scope.addProd = function(product) {
        localProdSvc.addProd(product);
        $location.path("/productLocal");
      };
      $scope.editProd = function(idx, product){
        localProdSvc.updateProd(idx, product);
        $location.path("/productLocal");
      };
      $scope.removeProd = function(idx){
        localProdSvc.deleteProd(idx);
      };
      $rootScope.$on("product:added", function () {
          $scope.products = localProdSvc.getProds();

      });

      $rootScope.$on("product:updated", function () {
          $scope.products = localProdSvc.getProds();

      });

      $rootScope.$on("product:deleted", function () {
          $scope.products = localProdSvc.getProds();

      });

    });
