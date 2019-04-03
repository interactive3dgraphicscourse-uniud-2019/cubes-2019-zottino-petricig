/*
* TODO doc
*/

// alert('cube imported')

var geometry = new THREE.BoxGeometry(1,1,1);
var texture = THREE.ImageUtils.loadTexture('textures/11635.jpg');
var material = new THREE.MeshPhongMaterial( { map: texture } );

class BaseCube extends THREE.Mesh {
	constructor(x, y, z){
		super(geometry, material);
		this.castShadow = true;
		this.receiveShadow = true;
		this.position.set( x, y, z );
	}
	
}