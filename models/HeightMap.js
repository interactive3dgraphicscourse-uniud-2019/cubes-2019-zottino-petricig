class HeightMap {

    constructor( img_path, callback ){
        var img = new Image();
        var self = this;
        img.onload = function () {
            self.data = null; //self.GetHeight(img);
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

        //heightMatrixay Creation
        var size = img.width * img.height;
        var heightMatrix = [];

        context.drawImage(img,0,0);

        //Setting all heightMatrixay values to 0
        for(var i=0; i<this.width; i++) {
            heightMatrix[i] = [];
            for(var j=0; j<this.height; j++) {
                heightMatrix[i][j] = undefined;
            }
        }

        var imgdata = context.getImageData(0, 0, img.width, img.height);
        var pixel = imgdata.data;

        //Saving Values in the heightMatrixay
        var k = 0;
        var col = 0;
        var row = 0;
        debugger;
        for (var i = 0; i <pixel.length; i +=4) {
            if(row >= heightmap.width){
                row = 0;
                col++;
            }
            var rgbsum = pixel[i]+pixel[i+1]+pixel[i+2];
            // heightMatrix[k++] = { height: Math.ceil(rgbsum/3)/10, jump: 0};
            heightMatrix[row][col] = { height: Math.ceil(rgbsum/3)/10, jump: 0};
            row++;
        }

        //Process height matrix in order to detect jumps
        //for(x = 0; x < heightmap.width; x++){
        //    for(z = 0; z < heightmap.height; z++){
        //
        //        if(x - 1 > 0 && )
        //        yt = heightmap.data[x+(z*heightmap.width)].height;
        //        zt = z - heightmap.width/2;
        //        scene.add( new LandCube( xt, yt, zt) );		
        //    }
        //}	

        return heightMatrix; // range values: [0, 255]
    }
}