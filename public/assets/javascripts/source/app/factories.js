/*global xplodeApp */

/*-------------------------------------------------------------------------
| FACTORIES FOR API CALLS
|------------------------------------------------------------------------*/

xplodeApp.factory( '$api', function( $http, $store ) {

	function apiPrefix(dir, params) {
		var prefix = 'api/';
		dir = dir || "";
		params = params ? "/" + params : "";

		return prefix + dir + params;
	}

	return {

		users: {
			getAll: function() {
				return $http.get( apiPrefix('users') ).then(function(result) {
					return result.data;
				});
			},
			getCurrent: function(id) {
				return $http.get( apiPrefix('users', id) ).then(function(result) {
					return result.data;
				});
			},
			getLoggedIn: function(id) {
				return $http.get( apiPrefix('users', '?getLoggedInUser') ).then(function(result) {
					return result.data;
				});
			},
		},

		programs: {
			getAll: function() {
				return $http.get( apiPrefix('programs') ).then(function(result) {
					return result.data;
				});
			},
			get: function(programId) {
				return $http.get( apiPrefix('programs', programId) ).then(function(result) {
					return result.data;
				});
			},
			getUser: function(userId) {
				return $http.get( apiPrefix('programs', '?user='+userId) ).then(function(result) {
					return result.data;
				});
			},
		},

		drills: {
			getAll: function() {
				return $http.get( apiPrefix('drills') ).then(function(result) {
					return result.data;
				});
			},

			get: function(drillId) {
				return $http.get( apiPrefix('drills', drillId) ).then(function(result) {
					return result.data;
				});
			},

			getInProgram: function(programId) {
				return $http.get( apiPrefix('drills', '?program='+programId) ).then(function(result) {
					return result.data;
				});
			},
		},

		results: {
			getUsers: function(drillId, userId) {
				return $http.get( apiPrefix('results', '?drill='+drillId+'&user='+userId) ).then(function(result) {
					return result.data;
				});
			},

			addSet: function(data) {
				return $http.post( apiPrefix('results'), data ).then(function(result) {
					return result.data;
				});
			},
		},
/*-------------------------------------------------------------------------
| Methods relating to the user
|------------------------------------------------------------------------*/
		getAllUsers: function() {
			return $http.get( apiPrefix('users') ).then(function(result) {
				return result.data;
			});
		},
		getCurrentUser: function(id) {
			return $http.get( apiPrefix('users', id) ).then(function(result) {
				return result.data;
			});
		},
		getLoggedInUser: function(id) {
			return $http.get( apiPrefix('users', '?getLoggedInUser') ).then(function(result) {
				return result.data;
			});
		},
/*-------------------------------------------------------------------------
| Methods relating to programs
|------------------------------------------------------------------------*/
		getAllPrograms: function() {
			return $http.get( apiPrefix('programs') ).then(function(result) {
				return result.data;
			});
		},

		getProgram: function(programId) {
			return $http.get( apiPrefix('programs', programId) ).then(function(result) {
				return result.data;
			});
		},

		getUserPrograms: function(userId) {
			return $http.get( apiPrefix('programs', '?user='+userId) ).then(function(result) {
				return result.data;
			});
		},
/*-------------------------------------------------------------------------
| Methods relating to drills
|------------------------------------------------------------------------*/
		getAllDrills: function() {
			return $http.get( apiPrefix('drills') ).then(function(result) {
				return result.data;
			});
		},

		getDrill: function(drillId) {
			return $http.get( apiPrefix('drills', drillId) ).then(function(result) {
				return result.data;
			});
		},

		getDrillsInProgram: function(programId) {
			return $http.get( apiPrefix('drills', '?program='+programId) ).then(function(result) {
				return result.data;
			});
		},
/*-------------------------------------------------------------------------
| Methods relating to results
|------------------------------------------------------------------------*/
		getResults: function(drillId, userId) {
			return $http.get( apiPrefix('results', '?drill='+drillId+'&user='+userId) ).then(function(result) {
				return result.data;
			});
		},

		addResult: function(data) {
			return $http.post( apiPrefix('results'), data ).then(function(result) {
				return result.data;
			});
		},

	};
});

xplodeApp.factory('$program', function() {
	return {
		current: {},
	};
});

xplodeApp.factory('$utilities', function() {

	function addZero(n) {
		return n < 10 ? '0'+n:''+n;
	}

	return {
		getTime: function(timestamp) {
			timestamp = timestamp || new Date().getTime();
			var date = new Date(timestamp);

			var obj = {
				'year'		: date.getFullYear(),
				'month'		: addZero(date.getMonth() + 1),
				'day'		: addZero(date.getDate()),
				'hours'		: addZero(date.getHours()),
				'minutes'	: addZero(date.getMinutes()),
				'seconds'	: addZero(date.getSeconds())
			};

			return obj.year + "-" + obj.month + "-" + obj.day + " " + obj.hours + ":" + obj.minutes + ":" + obj.seconds;
		}
	};
});