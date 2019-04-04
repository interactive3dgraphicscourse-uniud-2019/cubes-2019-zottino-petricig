/*
* TODO doc
*/

var waterTexture = THREE.ImageUtils.loadTexture('assets/water.jpg');
var waterMaterial = new THREE.ShaderMaterial( { map: waterTexture } );

class WaterCube extends BaseCube {
	constructor(x, y, z){
		
		var uniforms = {"materialColor": { type: "v3", value: new THREE.Vector3() }};
		
		var vs = document.getElementById("vertex").textContent;
		var fs = document.getElementById("fragment").textContent;
		
		uniforms.materialColor.value = new THREE.Vector3(0.01,0.05,5.0);
		
		waterMaterial.uniforms = uniforms;
		waterMaterial.vertexShader = vs;
		waterMaterial.fragmentShader = fs;
		super(x, y, z, waterMaterial);
	}
}





