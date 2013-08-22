/**
 * Main javascript file for Xplode
 * Author: Hampus Persson
 * @hampusp
 */

 /*global angular*/

"use strict";

(function( $ ) {

}(jQuery));

var xplodeApp = angular.module('xplodeApp', [ 'localStorage' ]);

xplodeApp.config(function( $routeProvider ) {
	$routeProvider
		.when('/', {
			controller: 'DashboardController',
			templateUrl: 'partials/dashboard.html'
		})
		.when('/program/:programId', {
			controller: 'ProgramController',
			templateUrl: 'partials/program.html'
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

xplodeApp.session = {
	'user': '',
	'program': '',
	'drill': ''
}