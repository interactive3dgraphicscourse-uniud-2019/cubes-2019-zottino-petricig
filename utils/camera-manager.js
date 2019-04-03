/*
* TODO doc
*/

// alert('camera-manager imported')


function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.lookAt( new THREE.Vector3( 10, Math.ceil(heightmap.data[heightmap.width/2 +(heightmap.height/2*heightmap.width)]/10) + 2, 10 ) );
	camera.position.set( 0, Math.ceil(heightmap.data[heightmap.width/2 +(heightmap.height/2*heightmap.width)]/10) + 2, 0 );
	
	scene.add( new BaseCube( 10, Math.ceil(heightmap.data[heightmap.width/2 +(heightmap.height/2*heightmap.width)]/10) + 2, 10 ) );		
	scene.add( new BaseCube( 0, Math.ceil(heightmap.data[heightmap.width/2 +(heightmap.height/2*heightmap.width)]/10) + 2, 0) );		

	CameraControl()
}


function CameraControl(){
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', Render );
}
