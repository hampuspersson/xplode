<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dialect Kuntjänst - Rapportsida</title>
	<link rel="stylesheet" href="assets/css/style.css">
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