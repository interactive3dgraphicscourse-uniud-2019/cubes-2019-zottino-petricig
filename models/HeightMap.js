class HeightMap {
    
    constructor( img_path, callback ){
        var self = this;
        this.width = 0;
        this.height = 0;
        this.matrix = [];
        var img = new Image();
        img.onload = function () {
            self.GetHeight(img);
            callback();
        };
        // load img source
        img.src = img_path;

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

        for(var i=0; i<this.width; i++) {
            this.matrix[i] = [];
            for(var j=0; j<this.height; j++) {
                this.matrix[i][j] = undefined;
            }
        }

        var imgdata = context.getImageData(0, 0, img.width, img.height);
        var pixel = imgdata.data;

        //Saving Values in the array
        var col = 0;
        var row = 0;
        for (var i = 0; i <pixel.length; i +=4) {
            if(row >= heightmap.width){
                row = 0;
                col++;
            }
            var rgbsum = pixel[i]+pixel[i+1]+pixel[i+2];
            this.matrix[row][col] = { height: Math.ceil(rgbsum/3)/10, jump: 0};
            row++;
        }
    }
}