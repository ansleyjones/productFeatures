angular.module("httpAdmin")
  .factory("httpAdminSvc", function($http, $rootScope, $log){

    var baseUrl = "http://tiy-fee-rest.herokuapp.com/collections/ansleyHttpProducts";

    var getProducts = function(){
      return $http.get(baseUrl);
    };
    var getProduct = function(id){
      return $http.get(baseUrl + "/" + id);
    };

    var createProduct = function(product){
      $http.post(baseUrl, product).then(function(response){
        $rootScope.$broadcast("product:added");
      })
    };
    var deleteProduct = function(id){
      $http.delete(baseUrl + "/" + id).then(function(response){
        $rootScope.$broadcast("product:deleted");
      })
    };
    var updateProduct = function(product){
      $http.put(baseUrl + "/" + product._id, product).then(function(response){
        $rootScope.$broadcast("product:updated");
      });
    };

    return {
      getProducts: getProducts,
      getProduct: getProduct,
      createProduct: createProduct,
      deleteProduct: deleteProduct,
      updateProduct: updateProduct
    }

  });
