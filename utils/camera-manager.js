/*
* TODO doc
*/

// alert('camera-manager imported')


function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	InitControl()
}


function InitPosition(){
	//camera.lookAt( new THREE.Vector3( 10, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 10 ) );
	//camera.position.set( 0, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 0 );
}


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
