var shopApp = angular.module('shopApp', ['ngRoute', 'shopControllers']);

shopApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/shop', {
		templateUrl: '../views/partials/items.html',
		controller: 'ItemsController'
	}).
	when('/#/details/:itemId', {
		templateUrl: '../views/partials/details.html',
		controller: 'DetailsController'
	}).
	when('/about', {
		templateUrl: '../views/partials/about.html',
		controller: 'AboutController'
	}).
	when('/cart', {
		templateUrl: '../views/partials/cart.html',
		controller: 'CartController'
	}).
	when('/checkout', {
		templateUrl: '../views/partials/checkout.html',
		controller: 'CheckoutController'
	})
}]);

