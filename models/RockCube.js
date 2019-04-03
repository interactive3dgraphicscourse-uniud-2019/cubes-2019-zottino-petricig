/*
* TODO doc
*/

var rockTexture = THREE.ImageUtils.loadTexture('assets/rock.jpg');
var rockMaterial = new THREE.MeshPhongMaterial( { map: rockTexture } );

class RockCube extends BaseCube {
	constructor(x, y, z){
		super(x, y, z, rockMaterial);
	}
}