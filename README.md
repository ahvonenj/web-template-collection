# Generic web template
A template for quick legacy web development.

**Benefits**

* Easy to download or fork to start a project
* Can be branched to make templates for specific needs i.e. game development

## Directory tree (base / master)

```
Generic-web-template
│   index.htm
│
├───resource
│   ├───doc
│   ├───file
│   ├───font
│   ├───img
│   └───svg
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
            qunit-1.18.0.css
            normalize.css
```


## Libraries included

Note: All libraries can be easily commented out when not needed

### jquery

* jquery 2.1.3
* jquery-ui 1.11.4
* jquery-mobile 1.4.5
* qunit 1.18.0

### jquery plugins

* jquery-transit 0.9.12

### other

* chance.js
* tinycolor.js
* normalize.css


## Branches

There are 3 main branches as of 5.4.2015. The brances are:

* master / normal website branch
* three.js branch for 3D games
* pixi.js branch for 2D games

All the "game" branches include a initialization script in `script/index.js` which creates the canvas as well as possible renderers and stages.

### master

Master branch includes all the libraries mentioned in the libraries section and that is about it. This branch is meant for normal web development without canvases.

### three.js

Three.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* three.js
* threex.keyboardstate.js
* threex.loop.js
* threex.oimo.js
* threex.solidwireframe.js
* victor.js

### pixi.js

Pixi.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* pixi.js
* victor.js
