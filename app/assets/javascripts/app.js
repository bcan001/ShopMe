var shopApp = angular.module('shopApp', ['ngRoute', 'shopControllers']);

shopApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/shop', {
		templateUrl: '../templates/shop.html',
		controller: 'ItemsController'
	}).
	when('/details/:itemId', {
		templateUrl: '../templates/details.html',
		controller: 'DetailsController'
	})
}]);