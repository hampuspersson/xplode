<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<title>Xplode - Logga in</title>
		<link rel="stylesheet" href="assets/css/style.css">
	</head>
	<body class="login">
		<section class="login-form">
			<h1>Logga in</h1>
			<form method="post" action="<?php URL::to('login'); ?>">
				<input type="text" name="email" id="email" placeholder="Email">
				<input type="password" name="password" id="password" placeholder="Lösenord">
				<input type="submit" value="Logga in">
			</form>
		</section>
	</body>
</html>