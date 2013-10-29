/**
 * Main javascript file for Xplode
 * Version: 1.0.2
 * Author: Hampus Persson
 * @hmps_se
 */

 /* jshint camelcase: false */
 /*global angular*/
 /*global FastClick*/

"use strict";

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