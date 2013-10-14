/*global xplodeApp */
/*global fastClick */
/* jshint camelcase: false */

xplodeApp.directive('fastClick', function ($parse) {

	'use strict';

	/* Test if the browser has touch support */
	function is_touch_device() {
		// ontouchstart works in most browsers, onmsgesturechange in ie10
		return 'ontouchstart' in window || window.navigator.msMaxTouchPoints;
	}

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			/**
			 * Parsed function from the directive
			 * @type {*}
			 */
			var fn = $parse(attrs.fastClick),


				/**
				 * Track the start points
				 */
				startX,

				startY,

				/**
				 * Whether or not we have for some reason
				 * cancelled the event.
				 */
				canceled,

				/**
				 * Our click function
				 */
				clickFunction = function(event) {
					if (!canceled) {
						scope.$apply(function () {
							fn(scope, {$event: event});
						});
					}
				};


			/**
			 * If we are actually on a touch device lets
			 * setup our fast clicks
			 */
			if( is_touch_device() ) {


				element.on('touchstart', function (event) {
					event.stopPropagation();

					var touches = event.originalEvent.touches;

					startX = touches[0].clientX;
					startY = touches[0].clientY;

					canceled = false;
				});

				element.on('touchend', function (event) {
					event.stopPropagation();
					clickFunction();
				});

				element.on('touchmove', function (event) {
					var touches = event.originalEvent.touches;

					// handles the case where we've swiped on a button
					if (Math.abs(touches[0].clientX - startX) > 10 ||
						Math.abs(touches[0].clientY - startY) > 10) {
						canceled = true;
					}
				});
			}

			/**
			 * If we are not on a touch enabled device lets bind
			 * the action to click
			 */
			if( !is_touch_device() ) {
				element.on('click', function (event) {
					clickFunction(event);
				});
			}
		}
	};
});