<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Xplode - Logga in</title>
	</head>
	<body class="login">
		<div class="login-form">
			<h1>Logga in</h1>
			<form method="post" action="<?php URL::to('login'); ?>">
				<input type="text" name="email" id="email">
				<input type="password" name="password" id="password">
				<input type="submit">
			</form>
		</div>
	</body>
</html>