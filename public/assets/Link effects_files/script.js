/*-------------------------------------------------------------------------
| JAVASCRIPT FOR LINK EFFECTS
|------------------------------------------------------------------------*/

var animationTest = window.getComputedStyle(
	document.querySelector('#testThisEl'), ':before'
).getPropertyValue('color')

if(animationTest == 'rgb(0, 255, 0)') {
	console.log('Animation of pseudo elements is supported by this browser');
} else {
	console.log('Animation of pseudo elements is NOT supported by this browser');
}

console.log(animationTest);