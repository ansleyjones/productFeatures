angular.module("httpUser")
  .controller("httpUserCtrl", function($scope, $rootScope, $routeParams, $location, $log, httpUserSvc, httpAdminSvc){

    $scope.cartTotal=0;

    httpUserSvc.getCart().success(function(cartProducts){
      $scope.cartProducts = cartProducts;
      // $scope.cartTotal = httpUserSvc.cartTotal(cartProducts);
        for (var i = 0; i < cartProducts.length; i++) {
          $scope.cartTotal += (cartProducts[i].price * cartProducts[i].quantity);
        };
    });

    httpAdminSvc.getProducts().success(function(products){
      $scope.products = products;
    });

    httpAdminSvc.getProduct($routeParams.idx).success(function(product){
      $scope.singleProduct = product;
      console.log($scope.singleProduct);
    });

    $scope.addToCart = function(product){
      httpUserSvc.addToCart(product);
      $location.path("/httpUser/cart");
    };

    $scope.addReview = function(review){
      httpAdminSvc.getProduct($routeParams.idx).success(function(product) {
        $scope.singleProduct = product;
        $scope.singleProduct.reviews.push({
          name: review.name,
          date: new Date(),
          content: review.content
        });

        httpAdminSvc.updateProduct($scope.singleProduct);

      });

      $scope.review = {};
    };



    $scope.removeFromCart = function(id){
      httpUserSvc.deleteFromCart(id);
      console.log(id);
    };

    $scope.editCart = function(product){
      httpUserSvc.updateCart(product);
    };

    $rootScope.$on("product:added", function(){
      httpUserSvc.getCart().success(function(cartProducts){
        $scope.cartProducts = cartProducts;
      });
    });

    $rootScope.$on("cart:updated", function(){
      httpUserSvc.getCart().success(function(cartProducts){
        $scope.cartProducts = cartProducts;
      });
    });

    $rootScope.$on("product:deleted", function(){
      httpUserSvc.getCart().success(function(cartProducts){
        $scope.cartTotal;
        $scope.cartProducts = cartProducts;
        for (var i = 0; i < cartProducts.length; i++) {
          $scope.cartTotal += (cartProducts[i].price * cartProducts[i].quantity);
        };
      });
    });

  });
