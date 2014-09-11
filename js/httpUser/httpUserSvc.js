angular.module("httpUser")
  .factory("httpUserSvc", function($http, $rootScope, $log){

    var cartUrl = "http://tiy-fee-rest.herokuapp.com/collections/ansleyHttpCart";

    var getCart = function(){
      return $http.get(cartUrl);
    };

    var cartTotal = function(){
      getCart().success(function(cartItems){
        var subtotal = 0;
        for (var i = 0; i < cartItems.length; i++) {
          subtotal += (cartItems[i].price * cartItems[i].quantity)
        }
        console.log(subtotal);
        return subtotal;
      });
    };

    var addToCart = function(product){
      var newProduct = {
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        quantity: 1
      }
      $http.post(cartUrl, newProduct).then(function(response){
        $rootScope.$broadcast("product:added");
      });
    };

    var deleteFromCart = function(product){
      $http.delete(cartUrl + "/" + product._id, product).then(function(response){
        $rootScope.$broadcast("product:deleted");
        $log.info("product:deleted")
      });
    };

    var updateCart = function(product){
      $http.put(cartUrl + "/" + product._id, product).then(function(response){
        $rootScope.$broadcast("cart:updated");
      });
    };


    return {
      getCart: getCart,
      addToCart: addToCart,
      deleteFromCart: deleteFromCart,
      updateCart: updateCart,
      cartTotal: cartTotal
    }

  });
