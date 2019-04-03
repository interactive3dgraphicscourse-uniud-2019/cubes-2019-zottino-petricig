/*
* TODO doc
*/

// alert('cube imported')

function CreateCube(){
	var geometry = new THREE.BoxGeometry(1,1,1);
	var texture = THREE.ImageUtils.loadTexture('textures/11635.jpg');
	var material = new THREE.MeshPhongMaterial( { map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	cube.castShadow = true;
    cube.receiveShadow = true;
    return cube;
}