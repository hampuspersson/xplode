<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array( 'before' => 'auth', function() {
	return View::make('dashboard');
}));

Route::get('login', function() {
	return View::make('login');
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