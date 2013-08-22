<?php

/*-------------------------------------------------------------------------
| Standard routes
|------------------------------------------------------------------------*/

Route::get('/', array( 'before' => 'auth', function() {
	return View::make('home');
}));

Route::get('login', function() {
	return View::make('login');
});

Route::get('logout', function() {
	Auth::logout();
	return Redirect::to('login');
});

Route::post('login', function() {
	$userdata = array(
		'email' => Input::get('email'),
		'password' => Input::get('password')
	);

	if (Auth::attempt($userdata)) {
		return Redirect::to('/');
	} else {
		echo "That didn't work";
	}
});

/*-------------------------------------------------------------------------
| RESTful resource controllers
|------------------------------------------------------------------------*/

Route::resource('api/users', 'UserController');
Route::resource('api/programs', 'ProgramController');
Route::resource('api/drills', 'DrillController');
Route::resource('api/groups', 'GroupController');
Route::resource('api/results', 'ResultController');