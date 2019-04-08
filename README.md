# Modeling and Rendering with Boxes

![Image from Minecraft](https://jordanweagly.files.wordpress.com/2012/02/figure_4.png)

## The Baseline

The idea is to build a **terrain** (at least 10x10) made by cubes with different colors following an arbitrary input **grayscale height-map** and bind **keybord events** to the **camera movements** (*in order to emulate an fps game*).


## Further developments and ideas

The idea is to add an intro in which the camera is inserted into a **universe of cubes**. 

Depending on the height, **different assets** (textures) will be applied to the cubes in order to create snow, rocks, meadows, rivers and lakes effects (using pixel shading).

In the first time the camera moves independently and creates a **short movie** full of animations; in the second time the user takes the control of the camera and is **free to explore the world** using the keyboard arrows.

Another improvement can be the design **animals meshes** with [ThreeJS Editor](https://threejs.org/editor/), export the mesh and import into our world applying some animations.

In order to create a more impactful visual effect we can also apply to the cubes additional **shading effects**.


## The Team

* Edoardo Lenzi
* Alessandro Zottino
* Aleksej Petricig


## Branching Strategy and Agile Pattern

We will follow the **Agile** pattern and best practices, in particular we adopt stand-up meetings and a public [Trello blackboad](https://trello.com/b/GHashjJM/cubes-2019) to track tasks and issues. 

> For some authorization issues we have decided to [**fork the repo**](https://github.com/EdoardoLenzi9/cubes-2019-zottino-petricig-lenzi-fork) in order to be able to bound the branches to the Trello tasks.

The applied branching strategy is **feature-oriented** so we have a branch for every single task and the main/static branches are `master` and `dev` following the standards that we can find in any enterprise working environment. Finally any merge will be made by a **pull request**. 


### Naming conventions and best practices

We adopt:

* [kebab-case](https://it.wikipedia.org/wiki/Kebab_case) for file, folder and branch names 
* [CamelCase](https://en.wikipedia.org/wiki/Camel_case) for functions and methods 
* [lowerCamelCase](https://www.w3schools.com/JS/js_conventions.asp) for variables

accordingly with the native project setup. 

We have tried to split the script on multiple files and use the 
object oriented paradigm, where possible.


### See Also

* [Guide Lines](guide-lines.md)
* [Journey](journey.md)
* [Final Report](final-report.md)


### Disclamer 

* The material contained in these project is restricted to students/professors of the 3D Interactive course of the Master of Computer Scienceat the University of Udine.

* It prohibited any use other than that inherent to the course, and in particular is expressly prohibited its use for any commercial purposes and/or for profit.


### Credits

We mainly take inspiration by the following threeJs examples:
* [misc_controls_pointerlock](https://threejs.org/examples/#misc_controls_pointerlock) 
* [webgl_camera](https://threejs.org/examples/#webgl_camera)
* [webgl_lights_physical](https://threejs.org/examples/#webgl_lights_physical)

Every asset used was made manually by the team exept for the assets finded at fork time used for the code snippets.

For the intro test we use the example font (from the ThreeJS snippet repository): `helvetiker_bold.typeface.json`

### Libraries

* three.min.js
* stats.min.js
* dat.gui.min.js
* Coordinates.js
* OrbitControls.js
* PointerLockControls.js

