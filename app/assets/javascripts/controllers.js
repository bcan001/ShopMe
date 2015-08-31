var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('ItemsController', ['$scope','$http', function ($scope, $http) {
	$http.get('store_items.json').success(function(data) {
		$scope.items = data;
	});
}]);

shopControllers.controller('DetailsController', ['$scope','$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
	$http.get('store_items.json').success(function(data) {
		$scope.items = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);

shopControllers.controller('AboutController', ['$scope','$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

}]);

shopControllers.controller('CartController', ['$scope','$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

}]);

shopControllers.controller('CheckoutController', ['$scope','$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {

}]);