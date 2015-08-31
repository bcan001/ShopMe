var shopControllers = angular.module('shopControllers', []);

// scope is a variable that you can use to pass info to the view, and vice versa
// $http is a SERVICE for loading in external data
// add scope and http and enclose all this in an array so nothing gets minified
shopControllers.controller('ItemsController', ['$scope','$http', function ($scope, $http, $routeParams) {

}]);

shopControllers.controller('DetailsController', ['$scope','$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

}]);