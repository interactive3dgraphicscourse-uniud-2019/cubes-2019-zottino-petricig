/*
* Ground builder 
*/

// Constants  
const WATER_LVL = 2 * 20 - 60;
const LOW_RED_LVL = 3 * 20 - 60;
const LAND_LVL = 8 * 20 - 60;
const HIGH_RED_LVL = 12 * 20 - 60;
const ROCK_LVL = 20 * 20 - 60;


function InitGround(){
	/*
	// uncomment to render a base ground plane
	var groundGeo = new THREE.PlaneBufferGeometry( 10000, 10000 );
	var groundMat = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x050505 } );
	groundMat.color.setHSL( 0.095, 1, 0.75 );
	var ground = new THREE.Mesh( groundGeo, groundMat );
	ground.position.y = -0.5;
	ground.rotation.x = -Math.PI/2;
	ground.receiveShadow = true;
	scene.add( ground );
	*/
	// Load heightmap
	heightmap = new HeightMap("./assets/Heightmap7.png", BuildTerrain);
}


/*
* Loops on the HeightMap matrix in order to insert into the scene the cubes
*/
function BuildTerrain(){
	var groundGroup = new THREE.Group();
	for(var x = 0; x < heightmap.width; x++){
		for(var z = 0; z < heightmap.height; z++){
			var xt = 20 * (x - heightmap.height/2);
			var yt = (20 * (heightmap.matrix[x][z].height)) - 60;
			var zt = 20 * (z - heightmap.width/2);
			for(var j = 0; j <= heightmap.matrix[x][z].jump; j++){
				var ytb = yt + Math.floor((Math.random() * 100) % 3) - 1  
				var cube = new RedCube( xt, yt - j * 20, zt);	
				if(yt <= WATER_LVL){
					cube = new WaterCube( xt, yt - j * 20, zt);	
				}
				if(yt > WATER_LVL && ytb <= LOW_RED_LVL){
					cube = new RedCube( xt, yt - j * 20, zt);	
				}
				if(ytb > LOW_RED_LVL && ytb <= LAND_LVL){
					cube = new LandCube( xt, yt - j * 20, zt);	
				}
				if(ytb > LAND_LVL && ytb <= HIGH_RED_LVL){
					cube = new RedCube( xt, yt - j * 20, zt);	
				}
				if(ytb > HIGH_RED_LVL && ytb <= ROCK_LVL){
					cube = new RockCube( xt, yt - j * 20, zt);	
				}
				if(ytb > ROCK_LVL){
				}
				groundGroup.add( cube );	
				objects.push( cube );
			}
		}
		scene.add(groundGroup);
		objects.push( groundGroup );
	}	
}