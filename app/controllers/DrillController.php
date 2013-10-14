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
		$days = array();
		$drills = array();

		if( isset($_GET['program'] )) {
			$days_in_program = Program::find($_GET['program'])->toArray();
			$days = json_decode($days_in_program['days']);

			foreach( $days as $day ) {
				foreach( $day->drills as $drill ) {
					$temp = Drill::find($drill->drill);
					$drill->id = $temp->id;
					$drill->title = $temp->title;
					$drill->desc = $temp->desc;
					$drill->video = $temp->video;
				}
			}

			$days_in_program['days'] = json_encode($days);

			$result = $days_in_program;
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