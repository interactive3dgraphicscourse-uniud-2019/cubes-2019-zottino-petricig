/*
* TODO doc
*/

// alert('camera-manager imported')


function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 20000 );
	cameraPerspectiveHelper = new THREE.CameraHelper( camera );
	cameraPerspectiveHelper.visible = true;
	scene.add( cameraPerspectiveHelper );

	InitControl()
}


function InitPosition(){
	camera.lookAt( new THREE.Vector3( 10, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 10 ) );
	camera.position.set( 0, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 0 );
}


function InitControl(){
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', Render );
}
