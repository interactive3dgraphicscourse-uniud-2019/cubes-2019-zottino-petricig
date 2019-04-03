/*
* TODO doc
*/

var snowTexture = THREE.ImageUtils.loadTexture('assets/snow.jpg');
var snowMaterial = new THREE.MeshPhongMaterial( { map: snowTexture } );

class SnowCube extends BaseCube {
	constructor(x, y, z){
		super(x, y, z, snowMaterial);
	}
}