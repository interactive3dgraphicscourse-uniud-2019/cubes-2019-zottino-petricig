/*
* TODO doc
*/

var landTexture = THREE.ImageUtils.loadTexture('assets/land.jpg');
var landMaterial = new THREE.MeshPhongMaterial( { map: landTexture } );

class LandCube extends BaseCube {
	constructor(x, y, z){
		super(x, y, z, landMaterial);
	}
}