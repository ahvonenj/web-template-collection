var _WIDTH = 0;
var _HEIGHT = 0;

$(document).ready(function()
{
	console.log('%c Initialized! ', 'background: #222; color: #bada55');
	
	_WIDTH = $('#wrapper').width();
	_HEIGHT = $('#wrapper').height();
	
	// Matter aliases
    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Composite = Matter.Composite,
        Composites = Matter.Composites,
        Common = Matter.Common,
        Constraint = Matter.Constraint,
        Events = Matter.Events,
        Bounds = Matter.Bounds,
        Vector = Matter.Vector,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Query = Matter.Query;

	// create a Matter.js engine
	var engine = Engine.create(
	{
		render: 
		{
			element: $('#wrapper')[0],
			//controller: Matter.RenderPixi,
			options:
			{
				width: _WIDTH,
				height: _HEIGHT,
				background: '#fafafa',
				wireframeBackground: '#222',
				hasBounds: false,
				enabled: true,
				wireframes: true,
				showSleeping: true,
				showDebug: false,
				showBroadphase: false,
				showBounds: false,
				showVelocity: false,
				showCollisions: false,
				showAxes: false,
				showPositions: false,
				showAngleIndicator: false,
				showIds: false,
				showShadows: false
			}
		}
	});

	engine.world.bounds = 
	{ 
        min: { x: 0, y: 0 }, 
        max: { x: _WIDTH, y: _HEIGHT } 
    }
	
	var mouseConstrait = MouseConstraint.create(engine);
	
	// create two boxes and a ground
	var boxA = Bodies.rectangle(400, 200, 80, 80);
	var boxB = Bodies.rectangle(450, 50, 80, 80);
	
	var ground_b = Bodies.rectangle(_WIDTH / 2, _HEIGHT - 5, _WIDTH, 10, { isStatic: true });
	var ground_r = Bodies.rectangle(_WIDTH - 5, _HEIGHT / 2, 10, _HEIGHT, { isStatic: true });
	var ground_t = Bodies.rectangle(_WIDTH / 2, 5, _WIDTH, 10, { isStatic: true });
	var ground_l = Bodies.rectangle(5, _HEIGHT / 2, 10, _HEIGHT, { isStatic: true });

	// add all of the bodies to the world
	World.add(engine.world, [boxA, boxB, ground_b, ground_r, ground_t, ground_l, mouseConstrait]);

	// run the engine
	Engine.run(engine);
	
	Events.on(engine, 'beforeUpdate', function()
	{
		var allBodies = Composite.allBodies(engine.world);
		
		//console.log(allBodies[0]);
		
		for(var body in allBodies)
		{
			Body.applyForce(allBodies[body], {x: 10, y: 10}, {x: 0.001, y: -0.005})
		}
	});
	
});