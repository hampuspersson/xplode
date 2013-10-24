<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-title" content="Xplode">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
		<title>Xplode - Logga in</title>
		<link rel="stylesheet" href="/assets/css/style.css">
		<link rel="stylesheet" href="http://i.icomoon.io/public/temp/cd2d187c8b/UntitledProject1/style.css">
	</head>
	<body class="purple-page">
		<img src="assets/images/xplode-logo.png" alt="The Xplode logo" class="logo__large-centered">
		<section class="purple-form">
			<form method="post" action="<?php URL::to('login'); ?>">
				<div class="input-group">
					<label for="email" class="purple-form__label icon-user"><span class="visuallyhidden">Användare</span></label>
					<input type="text" class="purple-form__text user" name="email" id="email" placeholder="Användare">
				</div>
				<div class="input-group">
					<label for="password" class="purple-form__label icon-lock"><span class="visuallyhidden">Lösenord</span></label>
					<input type="password" class="purple-form__text" name="password" id="password" placeholder="Lösenord">
				</div>
				<input type="submit" class="purple-form__submit" value="Logga in">
				<a href="#" class="purple-form__secondary">Glömt lösenordet?</a>
			</form>
		</section>
	</body>
</html>