/**
 * Main javascript file for Xplode
 * Author: Hampus Persson
 * @hampusp
 */

 /* jshint camelcase: false */
 /*global angular*/
 /*global FastClick*/

"use strict";

// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

var xplodeApp = angular.module('xplodeApp', [ 'ngRoute', 'localStorage', 'ngTouch', 'ngAnimate' ])
	.run(function( $rootScope) {
		$rootScope.ROUTES = "";
		// $rootScope.ROUTES = "/xplode/public";
	});

xplodeApp.config(function( $routeProvider, $rootScope ) {
	$routeProvider
		.when('/', {
			controller: 'DashboardController',
			templateUrl: 'partials/dashboard.html'
		})
		.when('/program/:programId', {
			controller: 'ProgramController',
			templateUrl: 'partials/program.html'
		})
		.when('/program/:programId/day/:day', {
			controller: 'ProgramController',
			templateUrl: 'partials/day.html'
		})
		.when('/drill/:drillId', {
			controller: 'DrillController',
			templateUrl: 'partials/drill.html'
		})
		.when('/drill/:drillId/add', {
			controller: 'DrillController',
			templateUrl: 'partials/add-drill.html'
		});
});