# Web template collection

A collection of templates for quick legacy web development. These templates are not necessarily meant for actual production development, but as quickstart-templates for quick legacy web projects. If you are tired of creating the same directory tree with the same libraries and base files, then this template collection is for you.

I personally create a lot of fiddles and mini-projects to try something new or to experiment with something. These projects are usually very similar, so I decided to make a collection templates which I can easily update and download.

**Benefits**

* A simple .zip download when you start a new project. Everything is included and ready right away.
* Can be branched to make even more templates for specific needs i.e. game development.
* Can be forked for even more customization.
* Changes to templates can be merged to existing projects pretty easily as the base file and folder structure is always the same.
* Can be quickly forked (and rebased) to create a new repository out of a template for new projects.

**Downsides**

* Every project has its own lib files, which is kind of unnecessary. Then again this makes a single project more portable and easier to work with... plus javascript libs do not take that much actual space anyway.
* Not up with current web standards and / or best practices - you should probably be using some kind of package manager instead.
* If you want some change to happen for all branches / templates, you must update each branch / template individually.
* Libraries have to be kept up to date manually.

## Directory tree (base / master)

```
web-template-collection
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

There are 4 main branches / templates as of 10.4.2015. The brances / templates are:

* master / normal website template
* three.js template for 3D games
* pixi.js template for 2D games
* matter.js template for 2D games that need a physics engine

All the "game" templates include a initialization script in `script/index.js` which creates the canvas as well as possible renderers, stages, etc.

### master

Master brance / template includes all the libraries mentioned in the libraries section and that is about it. This branch is meant for normal web development without canvases.

### three.js

Three.js brance / template includes all the libraries mentioned in the libraries section plus the following libraries:

* [three.js r71 - 3D graphics library](http://threejs.org/)
* [threex.keyboardstate.js - keyboard event plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.loop.js - render / update loop plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.oimo.js - physics plugin for three.js](http://www.threejsgames.com/extensions/)
* [threex.solidwireframe.js - object wireframe plugin for three.js](http://www.threejsgames.com/extensions/)
* [victor.js - vector calculation library](http://victorjs.org/)

### pixi.js

Pixi.js brance / template includes all the libraries mentioned in the libraries section plus the following libraries:

* [pixi.js 3.0.0 - 2D graphics library](http://www.pixijs.com/)
* [victor.js - vector calculation library](http://victorjs.org/)

### matter.js

matter.js brance / template includes all the libraries mentioned in the libraries section plus the following libraries:

Note: Pixi.js renderer is not used by matter.js by default. You must assign Pixi.js as matter.js' renderer by yourself. Pixi.js is only included, but not assigned / used. Please refer to [this](https://github.com/liabru/matter-js/wiki/Rendering) for information as to how to assign Pixi.js as matter.js' renderer.

* [pixi.js 3.0.0 - 2D graphics library](http://www.pixijs.com/) 
* [victor.js - vector calculation library](http://victorjs.org/)
* [matter.js 0.8.0 - 2D physics library](http://brm.io/matter-js/)

## Notes

### Google Chrome file:/// issue

In order to be able to run these templates locally with Google Chrome, without a web server or a development server bundle such as xampp, you must launch Chrome with --allow-file-access-from-files handle. This is because of some security settings of Google Chrome. To be safe, remember not to launch Google Chrome from the shortcut you will create when surfing the web normally.

To do this, create a shortcut of `chrome.exe`, right-click the shortcut and select properties and add `--allow-file-access-from-files` at the end of the target field, after the closing quotation mark. chrome.exe's default location is `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`.

Additional guide here: http://www.chrome-allow-file-access-from-file.com/

Another option is to use [LocalLinks extension](https://chrome.google.com/webstore/detail/locallinks/jllpkdkcdjndhggodimiphkghogcpida)

### Having issues with some of the libraries?

These issues most likely relate to the libraries themselves and thus I cannot help with that. 

### Templates not using the newest versions of the libraries

I will update the templates with the newest version if the libraries, if that seems like a necessary thing to do. You can always fork or download this repository and do that by yourself if you want.


