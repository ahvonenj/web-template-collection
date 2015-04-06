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

* [jquery 2.1.3](http://jquery.com/)
* [jquery-ui 1.11.4](http://jqueryui.com/)
* [jquery-mobile 1.4.5](http://jquerymobile.com/)
* [qunit 1.18.0](https://qunitjs.com/)

### jquery plugins

* [jquery-transit 0.9.12](http://ricostacruz.com/jquery.transit/)

### other

* [chance.js 0.7.3](http://chancejs.com/#)
* [tinycolor.js 1.1.2](https://github.com/bgrins/TinyColor)
* [normalize.css 3.0.2](http://necolas.github.io/normalize.css/)


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

* [three.js r71](http://threejs.org/)
* [threex.keyboardstate.js](http://www.threejsgames.com/extensions/)
* [threex.loop.js](http://www.threejsgames.com/extensions/)
* [threex.oimo.js](http://www.threejsgames.com/extensions/)
* [threex.solidwireframe.js](http://www.threejsgames.com/extensions/)
* [victor.js](http://victorjs.org/)

### pixi.js

Pixi.js branch includes all the libraries mentioned in the libraries section plus the following libraries:

* [pixi.js 2.2.8](http://www.pixijs.com/)
* [victor.js](http://victorjs.org/)
