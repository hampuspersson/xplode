'<!doctype html>
<html lang="en" data-ng-app="xplodeApp">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="Xplode">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<title>Xplode your performance</title>
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="http://i.icomoon.io/public/temp/447e88f7d6/UntitledProject1/style.css">

	<script>
		/* Fallback if the Google CDN is not available. */
		if (typeof jQuery == 'undefined') {
			document.write(unescape("%3Cscript src='assets/components/jquery/jquery.min.js' type='text/javascript'%3E%3C/script%3E"));
		}

		if (typeof angular == 'undefined') {
			document.write(unescape("%3Cscript src='assets/components/angular/angular.min.js' type='text/javascript'%3E%3C/script%3E"));
		}

	</script>
	<script src="assets/components/jquery/jquery.min.js"></script>
	<script src="http://code.angularjs.org/1.2.0-rc.3/angular.min.js"></script>
	<script src="http://code.angularjs.org/1.2.0-rc.3/angular-touch.min.js"></script>
	<script src="http://code.angularjs.org/1.2.0-rc.3/angular-animate.min.js"></script>
	<script src="assets/javascripts/vendors.min.js"></script>
	<script src="assets/javascripts/main.min.js?v=1.112"></script>
</head>
<body ng-view=""></body>
</html>
