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
	heightmap = new HeightMap("./assets/heightmap2.png", DoSomething);
	//heightmap = new HeightMap("./assets/Heightmap1.png", DoSomething);
}


function DoSomething(){
	console.log(heightmap)
	for(x = 0; x < heightmap.width; x++){
		for(z = 0; z < heightmap.height; z++){
			xt = x - heightmap.height/2;
			yt = 10;//Math.ceil(heightmap.data[x+(z*heightmap.width)]/10);
			zt = z - heightmap.width/2;
			scene.add( new LandCube( xt, yt, zt) );		
		}
	}	
    InitPosition();
}