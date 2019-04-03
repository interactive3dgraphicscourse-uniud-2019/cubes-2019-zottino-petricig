/*
* TODO doc
*/

// alert('ground-manager imported')


function InitGround(){
	var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
	var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
	groundMat.color.setHSL( 0.095, 1, 0.75 );
	var ground = new THREE.Mesh( groundGeo, groundMat );
	ground.position.y = -0.5;
	ground.rotation.x = -Math.PI/2;
	scene.add( ground );
	ground.receiveShadow = true;
	heightmap = new HeightMap("./textures/heightmap2.png", DoSomething);
}

function DoSomething(){
	alert("loading complete")
	console.log(heightmap)

	for(x in heightmap.width){
		for(y in heightmap.height){
			var cube = CreateCube();
			scene.add( cube );
		}
	}	
}