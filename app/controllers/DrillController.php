<?php

class DrillController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		/* To be able to process the drills array in angular the index needs to be set to the id of the drill */
		$drills = [];



		if( isset($_GET['program'] )) {
			$drills_in_program = Program::find($_GET['program']);

			// return $drills_in_program;

			foreach( json_decode($drills_in_program['drills']) as $key => $val ) {
				// return $val->drill;
				$drills[$val->drill] = Drill::find($val->drill)->toArray();
				$drills[$val->drill]['sets'] = $val->sets;
				$drills[$val->drill]['reps'] = $val->reps;

			}

			$result = json_encode($drills);
		} else {
			foreach( Drill::all()->toArray() as $key=>$val) {
				$drills[$val['id']] = $val;
			}
			$result = json_encode($drills);
		}

		return $result;
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
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$drill = Drill::find($id)->toArray();

		return json_encode($drill);
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