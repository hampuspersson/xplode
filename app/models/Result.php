<?php

class Result extends Eloquent {

	protected $table = 'results';
	protected $softDelete = true;

	protected $fillable = array('user_id', 'drill_id', 'program_id', 'weight', 'reps');
}