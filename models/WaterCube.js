/*
* TODO doc
*/

var waterTexture = THREE.ImageUtils.loadTexture('assets/water.jpg');
var waterMaterial = new THREE.MeshPhongMaterial( { map: waterTexture } );

class WaterCube extends BaseCube {
	constructor(x, y, z){
		super(x, y, z, waterMaterial);
	}
}