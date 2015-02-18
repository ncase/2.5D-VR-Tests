Math.TAU = 2*Math.PI;

//////////////////////////////////////////////////////
// SET UP EVERYTHING
//////////////////////////////////////////////////////

var renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
renderer.setClearColor( 0xFFFFFF, 1 ); // the default
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
var controls = new THREE.VRControls(camera);
var effect = new THREE.VREffect(renderer);
effect.setSize(window.innerWidth, window.innerHeight);
var vrmgr = new WebVRManager(effect);

//////////////////////////////////////////////////////
// THE SCENE
//////////////////////////////////////////////////////

// Create 3d objects
var geometry = new THREE.BoxGeometry(10, 10, 10);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);

// Position cube mesh
cube.position.z = -20;
cube.position.y = 5;

// Add cube mesh to your three.js scene
scene.add(cube);

// Add a Sprite
var sprite = new Sprite();
scene.add(sprite.mesh);
sprite.z = -10;

// Add a Sprite
var sprite2 = new Sprite();
scene.add(sprite2.mesh);
sprite2.z = -10;

var t = 0;


//////////////////////////////////////////////////////
// ANIMATION LOOP
//////////////////////////////////////////////////////

// Request animation frame loop function
function animate() {

	// Apply rotation to cube mesh
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.005;
	cube.rotation.x += 0.02;
    //cube.position.y += 1;

    t-=0.02;
    sprite.x = Math.sin(t)*20;
    sprite.z = Math.cos(t)*10-20;
    sprite.draw();

    sprite2.x = Math.sin(t+Math.TAU/2)*20;
    sprite2.z = Math.cos(t+Math.TAU/2)*10-20;
    sprite2.draw();

	// Update VR headset position and apply to camera.
	controls.update();

	// Render the scene through the VREffect, but only if it's in VR mode.
	if(vrmgr.isVRMode()) {
		effect.render(scene, camera);
	} else {
		renderer.render(scene, camera);
	}

	requestAnimationFrame(animate);

}

// Kick off animation loop
animate();


//////////////////////////////////////////////////////
// MISC STUFF I GUESS
//////////////////////////////////////////////////////

// Listen for keyboard event and zero positional sensor on appropriate keypress.
function onKey(event) {
    if (event.keyCode == 90) { // z
        controls.zeroSensor();
    }
};
window.addEventListener('keydown', onKey, true);

// Handle window resizes
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	effect.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', onWindowResize, false);

