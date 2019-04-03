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
	heightmap = new HeightMap("./assets/Heightmap7.png", BuildTerrain);
}


function BuildTerrain(){
	for(var x = 0; x < heightmap.width; x++){
		for(var z = 0; z < heightmap.height; z++){
			var xt = x - heightmap.height/2;
			var yt = heightmap.matrix[x][z].height;
			var zt = z - heightmap.width/2;
			for(var j = 0; j <= heightmap.matrix[x][z].jump; j++){
				scene.add( new LandCube( xt, yt - j, zt) );	
			}
		}
	}	
    InitPosition();
}