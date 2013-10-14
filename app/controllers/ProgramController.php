<?php

class ProgramController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$all_programs = Program::all()->toArray();

		if( isset($_GET['user']) ) {
			$user = array("programs" => array());
			foreach( $all_programs as $program ) {
				if( in_array('1', json_decode($program['users'])) ) {
					$user["programs"][] = $program;
				}
			}
			return json_encode($user);
		}

		return json_encode($all_programs);
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
		$program = Program::find($id)->toArray();

		$days = json_decode($program['days']);

		foreach( $days as $day ) {
			foreach( $day->drills as $drill ) {
				$temp = Drill::find($drill->drill);
				$drill->id = $temp->id;
				$drill->title = $temp->title;
				$drill->desc = $temp->description;
				$drill->video = $temp->video;
			}
		}

		$program['days'] = json_encode($days);

		return $program;
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