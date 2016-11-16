var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/index.html'
	})
	.when('/ronindev_stacks',{
		templateUrl: 'partials/ronindev_contact.html'
	})
	.when('/ronindev_portfolio',{
		templateUrl: 'partials/ronindev_portfolio.html'
	})
	.when('/ronindev_contact',{
		templateUrl: 'partials/ronindev_contact.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});