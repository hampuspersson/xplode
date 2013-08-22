<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('GroupTableSeeder');
		$this->command->info('Group table seeded!');

		$this->call('UserTableSeeder');
		$this->command->info('User table seeded!');

		$this->call('DrillTableSeeder');
		$this->command->info('Drill table seeded!');

		$this->call('ProgramTableSeeder');
		$this->command->info('Program table seeded!');

		$this->call('ResultTableSeeder');
		$this->command->info('Result table seeded!');

	}

}

class GroupTableSeeder extends Seeder {

	public function run()
	{
		DB::table('groups')->delete();

		Group::create(array(
			'name' => 'U17'
		));
	}

}

class UserTableSeeder extends Seeder {

	public function run()
	{
		DB::table('users')->delete();

		User::create(array(
			'name' => 'Theodor Palm',
			'email' => 'theo@limhamn-griffins.com',
			'password' => '$2y$08$E3MAwN76SacMPD7.PqfCWu7KVgMmury/GiYz9Gtyc6d.SFtJ57UIi', // HASH 'password'
			'group_id' => 0,
			'max' => json_encode(array('0'=>80, '1'=>120))
		));

		User::create(array(
			'name' => 'James Lundborg',
			'email' => 'james@limhamn-griffins.com',
			'password' => '$2y$08$E3MAwN76SacMPD7.PqfCWu7KVgMmury/GiYz9Gtyc6d.SFtJ57UIi', // HASH password
			'group_id' => 0,
			'max' => json_encode(array('0'=>90, '1'=>130))
		));
	}

}

class DrillTableSeeder extends Seeder {

	public function run()
	{
		DB::table('drills')->delete();

		Drill::create(array(
			'title' => 'Bänkpress',
			'description' => 'Ligg på rygg och pressa',
			'video' => 'http://www.youtube.com/watch?v=rT7DgCr-3pg'
		));

		Drill::create(array(
			'title' => 'Knäböj',
			'description' => 'Böj på knäna och sträck sedan',
			'video' => 'http://www.youtube.com/watch?v=Dy28eq2PjcM'
		));

		Drill::create(array(
			'title' => 'Marklyft',
			'description' => 'Böj på knän, ta tag i stången och dra',
			'video' => 'http://www.youtube.com/watch?v=Dy28eq2PjcM'
		));

		Drill::create(array(
			'title' => 'Frivändning',
			'description' => 'This is some complex shit!',
			'video' => 'http://www.youtube.com/watch?v=Dy28eq2PjcM'
		));
	}
}

class ProgramTableSeeder extends Seeder {

	public function run()
	{
		DB::table('programs')->delete();

		Program::create(array(
			'title' => 'Basövningar',
			'drills' => json_encode(array(
				array('drill'=>1, 'sets' => 3, 'reps' => 8),
				array('drill'=>2,'sets'=>3,'reps'=>8) )
			),
			'dates' => json_encode(array(
				'start' => '20130901',
				'stop' => '20131231'
			)),
			'users' => json_encode(array(2))
		));

		Program::create(array(
			'title' => 'Tynglyftning',
			'drills' => json_encode(array(
				array('drill'=>2, 'sets' => 5, 'reps' => 3),
				array('drill'=>3,'sets'=>6,'reps'=>3),
				array('drill'=>4,'sets'=>4,'reps'=>3) )
			),
			'dates' => json_encode(array(
				'start' => '20130901',
				'stop' => '20131231'
			)),
			'users' => json_encode(array(1))
		));
	}
}

class ResultTableSeeder extends Seeder {

	public function run()
	{
		DB::table('results')->delete();

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 1,
			'program_id' => 0,
			'weight' => 60,
			'reps' => 10
		));

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 1,
			'program_id' => 0,
			'weight' => 60,
			'reps' => 9
		));

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 1,
			'program_id' => 0,
			'weight' => 60,
			'reps' => 8
		));

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 2,
			'program_id' => 0,
			'weight' => 90,
			'reps' => 8
		));

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 2,
			'program_id' => 0,
			'weight' => 90,
			'reps' => 9
		));

		Result::create(array(
			'user_id' => 1,
			'drill_id' => 2,
			'program_id' => 0,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 2,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 2,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 2,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 3,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 3,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 3,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 4,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 4,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));

		Result::create(array(
			'user_id' => 0,
			'drill_id' => 4,
			'program_id' => 1,
			'weight' => 90,
			'reps' => 7
		));
	}
}