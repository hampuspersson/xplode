<?php

class Drill extends Eloquent {

	protected $table = 'drills';

	protected $fillable = array('title', 'description', 'video');
}