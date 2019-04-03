/*
* TODO doc
*/

// alert('cube imported')

var boxGeometry = new THREE.BoxGeometry(1,1,1);

class BaseCube extends THREE.Mesh {
	constructor(x, y, z, material){
		super(boxGeometry, material);
		this.castShadow = true;
		this.receiveShadow = true;
		this.position.set( x, y, z );
	}
}

// 0 highmountain		SnowCube	
// 1 middlemountain		RockCube
// 2 lowmountain		RedCube
// 3 flatland			LandCube
// 4 watercourse		WaterCube