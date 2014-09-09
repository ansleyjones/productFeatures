angular.module("mainProdModule")
  .controller("homeCtrl", function($scope, $log){
    $scope.greeting = "Welcome to my product home page";
    $log.info("home view loaded");
  });
