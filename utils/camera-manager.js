/*
* Camera management class
*/

/*
* Init camera and call PointerLockControls init
*/
function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	InitControl()
}

/*
* Init PointerLockControls, see https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_pointerlock.html
*/
function InitControl(){
	controls = new THREE.PointerLockControls( camera );

	var blocker = document.getElementById( 'blocker' );
	var instructions = document.getElementById( 'instructions' );

	instructions.addEventListener( 'click', function () {

		controls.lock();

	}, false );

	controls.addEventListener( 'lock', function () {

		instructions.style.display = 'none';
		blocker.style.display = 'none';

	} );

	controls.addEventListener( 'unlock', function () {

		blocker.style.display = 'block';
		instructions.style.display = '';

	} );

	scene.add( controls.getObject() );}
