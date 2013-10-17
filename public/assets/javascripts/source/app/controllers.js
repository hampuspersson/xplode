/*global xplodeApp */
/* jshint camelcase: false */

xplodeApp.controller('DashboardController', function( $scope, $api, $store ) {

	/**
	 * Initialize the dashboard controller
	 *
	 */
	function init() {

		$store.remove('user');
		$store.remove('program');

		/* Get the logged in user from Laravel */
		$api.getLoggedInUser().then(function(result) {

			$scope.currentUserId = result;

			$scope.user = $api.getCurrentUser($scope.currentUserId).then(function(result) {
				result.max = jQuery.parseJSON(result.max);
				result.firstName = result.name.substring(0,result.name.indexOf(" "));
				$store.set('user', result);

				$scope.programs = $api.getUserPrograms($scope.currentUserId).then(function(result) {
					var user = $store.get('user');
					user.programs = result.programs;
					$store.set('user', user);
					return result.programs;
				});

				return result;
			});

			/*$scope.drills = $api.getAllDrills().then(function(result) {
				return result;
			});*/
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

		if( $routeParams.day ) {
			$scope.day = $routeParams.day;
			$store.set('day', $routeParams.day);
		} else {
			// If a specific day is not asked for we can not continue.
		}


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

		if( $store.get('program') ) {
			$scope.program = $store.get('program');
		} else {
			$scope.program = $api.getProgram($routeParams.programId).then(function(result) {
				result.days = JSON.parse(result.days);
				$store.set('program', result);
				return result;
			});
		}
	}

	init();

/*-------------------------------------------------------------------------
| PUBLIC FUNCTIONS FOR THE PROGRAM CONTROLLER SCOPE
|------------------------------------------------------------------------*/

});

// xplodeApp.controller('Day')

xplodeApp.controller('DrillController', function( $scope, $routeParams, $api, $store, $utilities ) {

	/**
	 * Initialize the drill controller
	 *
	 */
	function init() {
		// Fallback if user isn't stored
		$scope.user = $store.get('user');
		$scope.program = $store.get('program');
		$scope.day = $store.get('day');

		$scope.drillReps = 0;
		$scope.drillWeight = 0;
		$scope.drillId = $routeParams.drillId;

		$scope.drill = $api.getDrill($routeParams.drillId).then(function(result) {
			return result;
		});

		$scope.reps = $api.getResults($scope.drillId, $scope.user.id).then(function(result) {
			for(var i=0; i<result.length; i++) {
				var month = 0 === result[i].created_at.substring(5,6) ?
									result[i].created_at.substring(6,7) :
									result[i].created_at.substring(5,7);
				var day = 0 === result[i].created_at.substring(8,9) ?
									result[i].created_at.substring(9,10) :
									result[i].created_at.substring(8,10);
				var time = result[i].created_at.substring(11,16);
				result[i].displayDate = day + "/" + month + " " + time;
			}

			if( typeof result[0] === 'undefined' ) {
				$scope.drillWeight = 0;
				$scope.drillReps = 0;
			} else {
				$scope.drillWeight = result[0].weight || 0;
				$scope.drillReps = result[0].reps || 0;
			}

			return result;
		});

	}

	init();

/*-------------------------------------------------------------------------
| PUBLIC FUNCTIONS FOR THE DRILL CONTROLLER SCOPE
|------------------------------------------------------------------------*/

	$scope.addSet = function() {

		var btn = document.getElementById('submit-result');
		btn.classList.add('sending');
		btn.value = "Jobbar...";

		$api.addResult({
			'user_id': $scope.user.id,
			'drill_id': $scope.drillId,
			'program_id': $scope.program.id,
			'reps': $scope.drillReps,
			'weight': $scope.drillWeight
		})
		.then(function(result) {
			btn.classList.remove('sending');
			btn.classList.add('success');
			btn.value = "Grymt jobbat!";
			setTimeout(function() {
				btn.classList.remove('success');
				btn.value = "Registrera";
				btn.blur();
			}, 2000);
			// REMOVE THE ENTRY IF THE SERVER THROWS AN ERROR
		});

		$scope.reps.$$v.unshift({
			'created_at': $utilities.getTime(),
			'user_id': $scope.user.id,
			'drill_id': $scope.drillId,
			'reps': $scope.drillReps,
			'weight': $scope.drillWeight,
			'displayDate': 'idag'
		});
	};
});