/*
* Entry point script for renderer and scene management and initializations
*/

// Global variables and constants
// var clock = new THREE.Clock();
container = document.getElementById( 'container' );
var scene, camera, renderer, controls, stats, heightmap;
var n = 10;
var radius = 100, theta = 0;


function InitRenderer(){
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;

	container.innerHTML = "";
	container.appendChild( renderer.domElement );
	container.appendChild( stats.dom );
}

function InitScene(){
    scene = new THREE.Scene();
    scene.add( CreateHemiLight() ); //creates a base uniform light 
	scene.add( CreateDirLight() );  //creates shadows
	scene.background = new THREE.Color( 0xffffff/*0xf1e1e1*/ );
	scene.fog = new THREE.FogExp2( 0xffffff, 0.05 );
	//scene.fog = new THREE.Fog( 0xffffff, 200, 250 );
	var ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );
}


function InitStat(){
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	document.body.appendChild( stats.domElement );
}


function Start() {
    InitStat();
    InitRenderer();
    InitScene();
    InitGround();
	InitCamera();
	// uncomment if you need to draw coordinate axes when building the scene
	Coordinates.drawAllAxes();
	window.addEventListener( 'resize', OnWindowResize, false );
	document.addEventListener( 'mousemove', OnMouseMove, false );
	window.addEventListener( 'wheel', OnMouseWheel, false );
	raycaster = new THREE.Raycaster();
}

function Update() {
	requestAnimationFrame( Update );
	// controls.update( clock.getDelta() );
	//controls.update();  
	stats.update();
	Render();
}

function Render() {
	// theta += 0.1;
	// camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
	// camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
	// camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
	// camera.lookAt( scene.position );
	// console.log(scene.position);

	camera.updateMatrixWorld();
	renderer.render(scene, camera);








	if ( /*controls.isLocked === true*/ true ) {
		raycaster.ray.origin.copy( controls.getObject().position );
		raycaster.ray.origin.y -= 10;
		var intersections = raycaster.intersectObjects( objects );
		var onObject = intersections.length > 0;
		var time = performance.now();
		var delta = ( time - prevTime ) / 1000;
		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;
		velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
		direction.z = Number( moveForward ) - Number( moveBackward );
		direction.x = Number( moveLeft ) - Number( moveRight );
		direction.normalize(); // this ensures consistent movements in all directions
		if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
		if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;
		if ( onObject === true ) {
			velocity.y = Math.max( 0, velocity.y );
			canJump = true;
		}
		controls.getObject().translateX( velocity.x * delta );
		controls.getObject().translateY( velocity.y * delta );
		controls.getObject().translateZ( velocity.z * delta );
		if ( controls.getObject().position.y < 10 ) {
			velocity.y = 0;
			controls.getObject().position.y = 10;
			canJump = true;
		}
		prevTime = time;
	}
}

Start();
Update();
			
		