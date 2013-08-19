<?php

class Result extends Eloquent {

	protected $table = 'results';

	protected $fillable = array('user_id', 'drill_id', 'program_id', 'date', 'reps');
}