function OnWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    controls.handleResize();
}

function OnMouseMove( event ) {
    //event.preventDefault();
    //console.log(event.clientX + " " + event.clientY);
    //mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function OnGuiInteraction(){
    console.dir(effectController);    
}