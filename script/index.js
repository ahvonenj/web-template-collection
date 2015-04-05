var stage;
var renderer;
var _WIDTH = 800;
var _HEIGHT = 600;

$(document).ready(function()
{
	console.log('%c Initialized! ', 'background: #222; color: #bada55');
	
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(_WIDTH, _HEIGHT);
    $('#wrapper').append(renderer.view);
 
	$('canvas').css(
	{
		width: _WIDTH + 'px',
		height: _HEIGHT + 'px'
	});

	init();
    
	
	
	requestAnimFrame(animate);
 
    
	
});

var debugbunnies = [];

function init()
{
	var texture = PIXI.Texture.fromImage("resource/img/bunny.png");
    var bunny = new PIXI.Sprite(texture);

    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    bunny.position.x = 200;
    bunny.position.y = 150;
 
    stage.addChild(bunny);
	debugbunnies.push(bunny);
	
}

function animate() 
{
	requestAnimFrame(animate);

	for(var bunny in debugbunnies)
	{
		debugbunnies[bunny].rotation += 0.1;
	}

	renderer.render(stage);
}