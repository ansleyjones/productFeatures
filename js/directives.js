angular.module("app.directives", [])
  .directive("productList", function () {
    return {
      restrict:"EA",
      templateUrl:"views/directives/productList.html",
      scope: {
        name: "@",
        image: "@",
        price: "@",
        description: "@",
        _id: "@"
      },
      // link: function (scope, element, attrs) {

      // }
    };
  })
  .directive("userCart", function () {
    return {
      restrict:"EA",
      templateUrl:"views/directives/userCart.html",
      scope: {
        quantity: "@",
        name: "@",
        image: "@",
        price: "@",
        description: "@"
      },
    };
  })
  .directive("numCart", function(){
    return{
      restrict:"E",
      templateUrl:"views/directive/numCart.html",
      scope: {
        quantity: "@"
      },
    };
  })
