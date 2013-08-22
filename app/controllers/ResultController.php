<?php

class ResultController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		if( isset($_GET['drill'] )) {
			$sets = Result::where('drill_id', '=', $_GET['drill'])->take(10)->orderBy('created_at', 'DESC')->get()->toArray();
			return $sets;
		}
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$input = Input::all();

		$result = Result::create(array(
			'user_id' => $input['user_id'],
			'drill_id' => $input['drill_id'],
			'program_id' => $input['program_id'],
			'weight' => $input['weight'],
			'reps' => $input['reps']
		));

		$input['date'] = $input['date'] = date('Y-m-d H:i:s');

		return json_encode($input);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}