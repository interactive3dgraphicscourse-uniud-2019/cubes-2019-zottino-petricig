var gui = new dat.GUI();


var effectController = {
    focalLength: 15,
    fstop: 2.8,
    showFocus: false,
    focalDepth: 3,
};


gui.add( effectController, 'focalLength', 1, 135, 0.01 ).onChange( OnGuiInteraction );
gui.add( effectController, 'fstop', 1.8, 22, 0.01 ).onChange( OnGuiInteraction );
gui.add( effectController, 'focalDepth', 0.1, 100, 0.001 ).onChange( OnGuiInteraction );
gui.add( effectController, 'showFocus', true ).onChange( OnGuiInteraction );