angular.module("localProdSvc")
  .factory("localProdSvc", function ($rootScope, $log) {
    var _products = [
      {
      name: "Shame",
      imageUrl: "http://www.vortexcultural.com.br/images/2012/03/Shame-2011-movie-poster.jpg",
      price: "$20.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat recusandae libero, error voluptas dolor unde, qui, vel in porro eos tempora. Harum veritatis in voluptate vel magnam, sunt possimus eligendi."
      },
      {
      name: "Benjamin Button",
      imageUrl: "http://upload.wikimedia.org/wikipedia/en/7/7d/Curious_case_of_benjamin_button_ver3.jpg",
      price: "$15.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat recusandae libero, error voluptas dolor unde, qui, vel in porro eos tempora. Harum veritatis in voluptate vel magnam, sunt possimus eligendi."
      },
      {
      name: "Citizen Kane",
      imageUrl: "https://www.movieposter.com/posters/archive/main/98/MPW-49417",
      price: "$18.00",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat recusandae libero, error voluptas dolor unde, qui, vel in porro eos tempora. Harum veritatis in voluptate vel magnam, sunt possimus eligendi."
      },
    ];

    var getProds = function () {
        return _products;
    };

    var addProd = function (newProd) {
        _products.push(newProd);
        $rootScope.$broadcast("product:added");
        $log.info("product:added");
    };

    var updateProd = function (idx, product) {
        _products[idx] = product;
        $rootScope.$broadcast("product:updated");
        $log.info("procuct:updated");
    };

    var deleteProd = function (idx) {
        _products.splice(idx, 1);
        $rootScope.$broadcast("product:deleted");
        $log.info("product:deleted");
    };

    var findProdByIdx = function (idx) {
        return _products[idx];
    };

    return {
        getProds: getProds,
        getProd: findProdByIdx,
        addProd: addProd,
        updateProd: updateProd,
        deleteProd: deleteProd

    };


  });
