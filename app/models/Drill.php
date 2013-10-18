<?php

class Drill extends Eloquent {

	protected $table = 'xplode_drills';

	protected $fillable = array('title', 'description', 'video');
}