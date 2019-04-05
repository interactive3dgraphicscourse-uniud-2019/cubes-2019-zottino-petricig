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
	scene.background = new THREE.Color( 0xf1e1e1 );
	scene.fog = new THREE.FogExp2( 0xffffff, 0.00015 );
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
	controls.update();  
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
}

Start();
Update();
			
		