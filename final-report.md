# Final Report

At the end of the project we've realized an introduction (`index.html`), "*movie like*", with a fixed camera using **affine transformations** (rotation, scaling and translation), **transparency effects** (blending), meshes with **light emissions**, floating **texts** and run-time geometry-update animations (using the **octahedron** exercise).

Once the intro ended the page is redirected to the `main.html` file and a terrain is builded from a **grayscale heightmap** (with arbitrary size).

Then a `fog` effect and some `lights` (controllable with the 
`dat.gui` interface) were added to the scene.

We have also tried to use **shaders** for water effects but, due to the deadline, we have only changed the color of the water-cubes without any additional effect.  

Finally we integrate the `PointerLockControls.js` lib following this snippet: [webgl_lights_physical](https://threejs.org/examples/#webgl_lights_physical)
in order to simulate a game.