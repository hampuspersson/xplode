<?php

class Program extends Eloquent {

	protected $table = 'xplode_programs';

	protected $fillable = array('drills', 'dates', 'users');
}