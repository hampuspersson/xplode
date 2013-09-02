<!doctype html>
<html lang="en" data-ng-app="xplodeApp">
<head>
	<meta charset="UTF-8">
	<title>Xplode your performance</title>
	<link rel="stylesheet" href="assets/css/style.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
	<script>
		/* Fallback if the Google CDN is not available. */
		if (typeof jQuery == 'undefined') {
			document.write(unescape("%3Cscript src='assets/components/jquery/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
		}

		if (typeof angular == 'undefined') {
			document.write(unescape("%3Cscript src='assets/components/angular/angular.min.js' type='text/javascript'%3E%3C/script%3E"));
		}

	</script>
	<script src="assets/components/angular-resource/angular-resource.min.js"></script>
	<script src="assets/components/angular-cookies/angular-cookies.min.js"></script>
	<script src="assets/components/Angular-localStorage/src/localStorage.js"></script>
	<script src="assets/javascripts/main.min.js"></script>
</head>
<body data-ng-view=""></body>
</html>
