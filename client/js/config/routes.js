var productsApp = angular.module('productsApp', ['ngRoute']);

productsApp.config(function($routeProvider){
console.log("in here");

	 $routeProvider
	 		.when('/', {
	 			templateUrl: '/static/partials/customers.html',
	 			controller: "customersController"
	 		})
	        .when('/customers',{
	            templateUrl: '/static/partials/customers.html',
	            controller: "customersController"
	        })
	        .when('/orders',{
	            templateUrl: '/static/partials/orders.html',
	            controller: "ordersController"
	        })
	        
	        .otherwise({
	          redirectTo: '/'
	        });
})