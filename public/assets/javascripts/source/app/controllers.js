/*global xplodeApp */

xplodeApp.controller('DashboardController', function( $scope, $api, $store ) {

	/**
	 * Initialize the dashboard controller
	 *
	 */
	function init() {

		$api.getLoggedInUser().then(function(result) {

			$scope.currentUserId = result;

			$scope.user = $api.getCurrentUser($scope.currentUserId).then(function(result) {
				result.max = jQuery.parseJSON(result.max);
				result.firstName = result.name.substring(0,result.name.indexOf(" "));
				$store.set('user', result);
				return result;
			});

			$scope.programs = $api.getUserPrograms($scope.currentUserId).then(function(result) {
				return result.programs;
			});

			$scope.drills = $api.getAllDrills().then(function(result) {
				return result;
			});
		});
	}

	init();

/*-------------------------------------------------------------------------
| PUBLIC FUNCTIONS FOR THE HOME CONTROLLER SCOPE
|------------------------------------------------------------------------*/

});

xplodeApp.controller('ProgramController', function( $scope, $routeParams, $api, $store ) {

	/**
	 * Initialize the program controller
	 *
	 */
	function init() {

		if( $store.get('user') ) {
			$scope.user = $store.get('user');
		} else {
			$scope.currentUserId = $api.getLoggedInUser().then(function(result) {
				$scope.user = $api.getCurrentUser($scope.currentUserId).then(function(result) {
					result.max = jQuery.parseJSON(result.max);
					result.firstName = result.name.substring(0,result.name.indexOf(" "));
					$store.set('user', result);
					return result;
				});
			});
		}

		$scope.program = $api.getProgram($routeParams.programId).then(function(result) {
			$store.set('program', result);
			return result;
		});

		$scope.programDrills = $api.getDrillsInProgram($routeParams.programId).then(function(result) {
			return result;
		});
	}

	init();

/*-------------------------------------------------------------------------
| PUBLIC FUNCTIONS FOR THE PROGRAM CONTROLLER SCOPE
|------------------------------------------------------------------------*/

});

xplodeApp.controller('DrillController', function( $scope, $routeParams, $api, $store, $utilities ) {

	/**
	 * Initialize the drill controller
	 *
	 */
	function init() {
		// Fallback if user isn't stored
		$scope.user = $store.get('user');
		$scope.program = $store.get('program');

		$scope.drillReps = 10;
		$scope.drillWeight = 80;
		$scope.drillId = $routeParams.drillId;

		$scope.drill = $api.getDrill($routeParams.drillId).then(function(result) {
			return result;
		});

		$scope.reps = $api.getResults($scope.drillId).then(function(result) {
			return result;
		});

	}

	init();

/*-------------------------------------------------------------------------
| PUBLIC FUNCTIONS FOR THE DRILL CONTROLLER SCOPE
|------------------------------------------------------------------------*/

	$scope.addSet = function() {

		$scope.reps.$$v.unshift({
			'created_at': $utilities.getTime(),
			'user_id': $scope.user.id,
			'drill_id': $scope.drillId,
			'reps': $scope.drillReps,
			'weight': $scope.drillWeight
		});

		$api.addResult({
			'user_id': $scope.user.id,
			'drill_id': $scope.drillId,
			'program_id': $scope.program.id,
			'reps': $scope.drillReps,
			'weight': $scope.drillWeight
		})
		.then(function(result) {
			// REMOVE THE ENTRY IF THE SERVER THROWS AN ERROR
		});
	};
});