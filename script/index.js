$(document).ready(function()
{
	console.log('%c Initialized! ', 'background: #222; color: #bada55');
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	window.addEventListener( 'resize', onWindowResize, false );

	function onWindowResize()
	{
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	
	var light = new THREE.AmbientLight(0x404040); // soft white light
	scene.add(light);
	
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 6;
	
	var keyboard = new THREEx.KeyboardState();
	

	var render = function () 
	{
		if(keyboard.pressed("shift+up"))
			camera.position.z += 0.1;
		if(keyboard.pressed("shift+down"))
			camera.position.z -= 0.1;
		if(keyboard.pressed("left"))
			camera.position.x += 0.1;
		if(keyboard.pressed("right"))
			camera.position.x -= 0.1;
		if(keyboard.pressed("up"))
			camera.position.y -= 0.1;
		if(keyboard.pressed("down"))
			camera.position.y += 0.1;
		
		requestAnimationFrame(render);

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		cube.rotation.z += 0.01;

		renderer.render(scene, camera);
	};

	render();
	
});