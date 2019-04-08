/*
* Simple script that init dat.gui interface and adds to checkboxes for  
* light management
*/ 

var gui = new dat.GUI();

var settings = {
    hemiLight: true,
    dirLight: true,
};
  
gui.add(settings, 'hemiLight').onChange(function (value) {
    if(value){
        scene.add( hemiLight ); //creates a base uniform light 
    } else{
        scene.remove( hemiLight ); //creates a base uniform light 
    }
}); 
  
gui.add(settings, 'dirLight').onChange(function (value) {
    if(value){
        scene.add( dirLight );  //creates shadows
    } else{
        scene.remove( dirLight );  //creates shadows
    }
}); 

/*  
// TODO Load the HeightMap from <input> picker

var input = document.createElement('input');
input.type = 'file';
input.onchange = e => { 
   var file = e.target.files[0]; 
   console.dir(file)
}

var obj = { add:function(){ 
    input.click();
    //document.getElementById('file-input').click(); console.log("clicked") }
}};

gui.add(obj,'add');
*/