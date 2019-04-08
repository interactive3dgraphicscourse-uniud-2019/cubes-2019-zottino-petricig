/*
* TODO doc
*/

// alert('ground-manager imported')
const WATER_LVL = 2;
const LOW_RED_LVL = 3;
const LAND_LVL = 8;
const HIGH_RED_LVL = 12;
const ROCK_LVL = 20;


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
	var groundGroup = new THREE.Group();
	for(var x = 0; x < heightmap.width; x++){
		for(var z = 0; z < heightmap.height; z++){
			var xt = x - heightmap.height/2;
			var yt = heightmap.matrix[x][z].height;
			var zt = z - heightmap.width/2;
			for(var j = 0; j <= heightmap.matrix[x][z].jump; j++){
				var ytb = yt + Math.floor((Math.random() * 100) % 3) - 1  
				if(yt <= WATER_LVL){
					groundGroup.add( new WaterCube( xt, yt - j, zt) );	
				}
				if(yt > WATER_LVL && ytb <= LOW_RED_LVL){
					groundGroup.add( new RedCube( xt, yt - j, zt) );	
				}
				if(ytb > LOW_RED_LVL && ytb <= LAND_LVL){
					groundGroup.add( new LandCube( xt, yt - j, zt) );	
				}
				if(ytb > LAND_LVL && ytb <= HIGH_RED_LVL){
					groundGroup.add( new RedCube( xt, yt - j, zt) );	
				}
				if(ytb > HIGH_RED_LVL && ytb <= ROCK_LVL){
					groundGroup.add( new RockCube( xt, yt - j, zt) );	
				}
				if(ytb > ROCK_LVL){
					groundGroup.add( new SnowCube( xt, yt - j, zt) );	
				}
			}
		}
		scene.add(groundGroup);
		objects.push( groundGroup );
	}	
    InitPosition();
}