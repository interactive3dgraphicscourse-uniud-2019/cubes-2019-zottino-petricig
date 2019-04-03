class HeightMap {

    constructor( img_path, callback ){
        var img = new Image();
        var self = this;
        img.onload = function () {
            self.data = self.GetHeight(img);
            callback();
        };
        // load img source
        img.src = img_path;
        this.width = 0;
        this.height = 0;
        this.data = null;
    }

    GetHeight(img) {
        //Canvas Creation
        var canvas = document.createElement('canvas');
        this.width = canvas.width = img.width;
        this.height = canvas.height = img.height;
        var context = canvas.getContext('2d');

        //Array Creation
        var size = img.width * img.height;
        var arr = new Float32Array(size);

        context.drawImage(img,0,0);

        //Setting all array values to 0
        for(var i = 0; i < size; i++) {
            arr[i] = 0;
        }

        var imgdata = context.getImageData(0, 0, img.width, img.height);
        var pixel = imgdata.data;

        //Saving Values in the array
        var k = 0;
        for (var i = 0; i <pixel.length; i +=4) {
            var rgbsum = pixel[i]+pixel[i+1]+pixel[i+2];
            arr[k++] = rgbsum/3;
        }
        return arr; // range values: [0, 255]
    }
}