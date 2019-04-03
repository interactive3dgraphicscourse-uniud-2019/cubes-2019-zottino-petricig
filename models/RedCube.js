/*
* TODO doc
*/

var redTexture = THREE.ImageUtils.loadTexture('assets/red.jpg');
var redMaterial = new THREE.MeshPhongMaterial( { map: redTexture } );

class RedCube extends BaseCube {
	constructor(x, y, z){
		super(x, y, z, redMaterial);
	}
}