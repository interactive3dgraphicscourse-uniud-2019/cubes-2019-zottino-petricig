/*
* TODO doc
*/

// alert('camera-manager imported')


function InitCamera(){
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 20000 );
	//cameraPerspectiveHelper = new THREE.CameraHelper( camera );
	//cameraPerspectiveHelper.visible = true;
	//scene.add( cameraPerspectiveHelper );

	InitControl()
}


function InitPosition(){
	//camera.lookAt( new THREE.Vector3( 10, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 10 ) );
	//camera.position.set( 0, heightmap.matrix[heightmap.width/2][heightmap.height/2].height + 2, 0 );
}



var objects = [];
var raycaster;
var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;
var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var vertex = new THREE.Vector3();
var color = new THREE.Color();


function InitControl(){
	//controls = new THREE.OrbitControls( camera );
	//controls.addEventListener( 'change', Render );

	controls = new THREE.PointerLockControls( camera );

	var blocker = document.getElementById( 'blocker' );
	var instructions = document.getElementById( 'instructions' );
	controls.lock();
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

	scene.add( controls.getObject() );




	var onKeyDown = function ( event ) {
		switch ( event.keyCode ) {
			case 38: // up
			case 87: // w
				moveForward = true;
				break;
			case 37: // left
			case 65: // a
				moveLeft = true;
				break;
			case 40: // down
			case 83: // s
				moveBackward = true;
				break;
			case 39: // right
			case 68: // d
				moveRight = true;
				break;
			case 32: // space
				if ( canJump === true ) velocity.y += 350;
				canJump = false;
				break;
		}
	};
	var onKeyUp = function ( event ) {
		switch ( event.keyCode ) {
			case 38: // up
			case 87: // w
				moveForward = false;
				break;
			case 37: // left
			case 65: // a
				moveLeft = false;
				break;
			case 40: // down
			case 83: // s
				moveBackward = false;
				break;
			case 39: // right
			case 68: // d
				moveRight = false;
				break;
		}
	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
}
