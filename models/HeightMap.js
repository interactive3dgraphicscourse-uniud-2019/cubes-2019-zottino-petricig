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
        // Load image
        img.src = img_path;

    }

    GetHeight(img) {
        // Canvas Creation
        var canvas = document.createElement('canvas');
        this.width = canvas.width = img.width;
        this.height = canvas.height = img.height;
        var context = canvas.getContext('2d');

        var size = img.width * img.height;
        context.drawImage(img,0,0);

        // Init matrix to 0s
        for(var i=0; i<this.width; i++) {
            this.matrix[i] = [];
            for(var j=0; j<this.height; j++) {
                this.matrix[i][j] = undefined;
            }
        }

        var imgdata = context.getImageData(0, 0, img.width, img.height);
        var pixel = imgdata.data;

        // Saving Values in the matrix
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

        // Detect jumps
        for(var x = 0; x < this.width; x++){
            for(var z = 0; z < this.height; z++){
                var height = this.matrix[x][z].height - 1;
                var jump = 0;

                if(x - 1 >= 0 && this.matrix[x - 1][z].height < height){
                    if(jump < height - this.matrix[x-1][z].height){
                        jump = height - this.matrix[x-1][z].height;
                    }
                }
                if(x + 1 < this.width && this.matrix[x + 1][z].height < height){
                    if(jump < height - this.matrix[x + 1][z].height){
                        jump = height - this.matrix[x + 1][z].height;
                    }
                }
                if(z - 1 >= 0 && this.matrix[x][z - 1].height < height){
                    if(jump < height - this.matrix[x][z - 1].height){
                        jump = height - this.matrix[x][z - 1].height;
                    }
                }
                if(z + 1 < this.height && this.matrix[x][z + 1].height < height){
                    if(jump < height - this.matrix[x][z + 1].height){
                        jump = height - this.matrix[x][z + 1].height;
                    }
                }
                this.matrix[x][z].jump = jump;
            }
        }
    }
}