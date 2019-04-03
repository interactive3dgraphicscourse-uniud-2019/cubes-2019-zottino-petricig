/*
* TODO doc
*/

// alert('camera-manager imported')


function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set( 2, 2, 2 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );
}


function CameraControl(){
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', Render );
}
