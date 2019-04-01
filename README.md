# Modeling and Rendering with Boxes

![Image from Minecraft](https://jordanweagly.files.wordpress.com/2012/02/figure_4.png)

## The Baseline

The idea is to build a **terrain** (10x10) made by cubes with different colors following an arbitrary input **grayscale height-map** and bind **keybord events** to the **camera movements** (*in order to emulate an fps game*).


## Further developments and ideas

The idea is to add an intro in which the **cubes fall down from the sky**, defining the terrain. 
Depending on the height, **different textures** will be applied to the cubes in order to create snow, rocks, meadows, rivers and lakes effects.

In this first time the camera moves independently and creates a **short movie** full of animations; in a second time the user takes the control of the camera and is **free to explore the world** using the keyboard arrows.

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


### Naming conventions

We adopt:

* [kebab-case](https://it.wikipedia.org/wiki/Kebab_case) for file, folder and branch names 
* [CamelCase](https://en.wikipedia.org/wiki/Camel_case) for functions and methods 
* [lowerCamelCase](https://www.w3schools.com/JS/js_conventions.asp) for variables

accordingly with the native project setup. 


### See Also

* [Guide Lines](guide-lines.md)
* [Journey](journey.md)
* [Final Report](final-report.md)