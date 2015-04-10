# Generic web template

A template for quick legacy web development. This thing is not necessarily meant for actual production development, but as a quickstart-template for quick legacy web projects. If you are tired of creating the same directory tree with the same libraries and base files, then this template is for you.

I personally create a lot of fiddles and mini-projects to try something new or to experiment with something. These projects are usually very similar, so I decided to make a template that I can easily update and download.

**Benefits**

* A simple .zip download when you start a new project. Everything is included and ready right away.
* Can be branched to make templates for specific needs i.e. game development.
* Can be forked for even more customization.
* Changes to template can be merged to existing projects pretty easily as the base file and folder structure is always the same.

**Downsides**

* Every project has its own lib files, which is kind of unnecessary. Then again this makes a single project more portable and easier to work with... plus javascript libs do not take that much actual space anyway.
* Not up with current web standards and / or best practices - you should probably be using some kind of package manager instead.
* If you want some change to happen for all branches, you must update each branch individually.

## Directory tree (base / master)

```
Generic-web-template
│   index.htm
│
├───page
│
├───resource
│   │
│   ├───doc
│   │
│   ├───file
│   │
│   ├───font
│   │
│   ├───img
│   │
│   └───svg
│
├───script
│   │   index.js
│   │
│   └───lib
│           chance.min.js
│           jquery-2.1.3.min.js
│           jquery-ui.min.js
│           jquery.mobile-1.4.5.min.js
│           jquery.transit.min.js
│           qunit-1.18.0.js
│           tinycolor.js
│
└───style
    │   index.css
    │
    └───lib
            jquery-ui.min.css
            jquery.mobile-1.4.5.min.css
            normalize.css
            qunit-1.18.0.css
```


## Libraries included

Note: All libraries can be easily commented out when not needed

### jquery

* [jquery 2.1.3 - The jquery library](http://jquery.com/)
* [jquery-ui 1.11.4 - jquery-UI library](http://jqueryui.com/)
* [jquery-mobile 1.4.5 - jquery-mobile library](http://jquerymobile.com/)
* [qunit 1.18.0 - qunit library](https://qunitjs.com/)

### jquery plugins

* [jquery-transit 0.9.12 - jquery-transit plugin](http://ricostacruz.com/jquery.transit/)

### other

* [chance.js 0.7.3 - randomization library](http://chancejs.com/#)
* [tinycolor.js 1.1.2 - color manipulation library](https://github.com/bgrins/TinyColor)
* [normalize.css 3.0.2 - css normalizator](http://necolas.github.io/normalize.css/)


## Branches

There are 4 main branches as of 10.4.2015. The brances are:

* master / normal website branch
* three.js branch for 3D games
* pixi.js branch for 2D games
* matter.js branch for 2D games that need a physics engine

All the "game" branches include a initialization script in `script/index.js` which creates the canvas as well as possible renderers, stages, etc.

### master

Master branch includes all the libraries mentioned in the libraries section and that is about it. This branch is meant for normal web development without canvases.

### three.js

Three.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* [three.js r71 - 3D graphics library](http://threejs.org/)
* [threex.keyboardstate.js - keyboard event plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.loop.js - render / update loop plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.oimo.js - physics plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.solidwireframe.js - object wireframe plugin for three.js](http://www.threejsgames.com/extensions/)
* [victor.js - vector calculation library](http://victorjs.org/)

### pixi.js

Pixi.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* [pixi.js 2.2.8 - 2D graphics library](http://www.pixijs.com/)
* [victor.js - vector calculation library](http://victorjs.org/)

### matter.js

matter.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* [pixi.js 2.2.8 - 2D graphics library](http://www.pixijs.com/)
* [victor.js - vector calculation library](http://victorjs.org/)
* [matter.js 0.8.0](http://brm.io/matter-js/)
