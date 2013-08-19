<?php

class Program extends Eloquent {

	protected $table = 'programs';

	protected $fillable = array('drills', 'dates', 'users');
}