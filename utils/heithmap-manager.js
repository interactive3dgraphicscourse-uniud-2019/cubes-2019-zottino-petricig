/*
* TODO doc
*/

// alert('heightmap-manager works')

// alert('heightmap-manager works')
function getHeight(img) {

    //Canvas Creation
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d');

    //Array Creation
    var size = imgg.width * img.height;
    var arr = new Float32Array(size);

    context.drawImage(img,0,0);

    //Setting all array values to 0
    for(var i = 0; i < size; i++) {
        arr[i] = 0;
    }

    var imgdata = context.getImageData(0, 0, img.width, img.height);
    var pixel = imgdata.arr;

    //Saving Values in the array
    var k = 0;
    for (var i = 0; i <pixel.length; i +=4) {
        var rgbsum = pixel[i]+pixel[i+1]+pixel[i+2];
        arr[k++] = rgbsum/3;
    }
    /*
    Greyscale values:
    255
    229
    204
    178
    153
    127
    102
    78
    51
    25
    0
    */
    return arr;
}

/*
var geometry = new THREE.BoxGeometry(1,1,1);
	var texture = THREE.ImageUtils.loadTexture('textures/11635.jpg');
	var material = new THREE.MeshPhongMaterial( { map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	cube.castShadow = true;
    cube.receiveShadow = true;
    
*/

var arrPosition = 0;
for(var z = 0; z < 10; z++) { //10 = img.height

    for(var x = 0; x < 10; x++) { //10 = img.width


        
        //get.altezza
        for(y = 0; y < altezza; y++) { //altezza = numero di cubi da disegnare in base a valore nell'array
            //Cube Creation

        }
        arrPosition++;
    }

}