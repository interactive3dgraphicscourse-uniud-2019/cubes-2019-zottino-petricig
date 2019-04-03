/*
* Entry point script for renderer and scene management and initializations
*/

// Global variables and constants
var scene, camera, renderer, controls, stats, heightmap;
var n = 10;

function InitRenderer(){
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( 0xf0f0f0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
	document.body.appendChild( renderer.domElement );
}

function InitScene(){
    scene = new THREE.Scene();
    scene.add( CreateHemiLight() );
    scene.add( CreateDirLight() );
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
    InitCamera();
    CameraControl();
    InitGround();

	// uncomment if you need to draw coordinate axes when building the scene
    Coordinates.drawAllAxes();
}

function Update() {
	requestAnimationFrame( Update );
	controls.update();  
	stats.update();
	Render();
}

function Render() {
	renderer.render(scene, camera);
}

Start();
Update();
			
		