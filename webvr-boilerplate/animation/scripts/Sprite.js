/***

Sprite:

Should take a preloaded image (and data) and just render it as a texture.
Also, use polar coordinates, and whether or not to always face the cam.
(remember: y is "up" in ThreeJS)

OFFSET: x,y for the image.
These are regular x & y.

***/
function Sprite(){

	var self = this;

	self.x = 0;
	self.y = 0;
	self.z = 0;

	self.offset = { x:0, y:0 };

	self.currentFrame = 0;
	self.sheet = {
		width: 1,
		height: 1,
		total: 1
	};

	self.faceCamera = true;

	// HACK for now
	self.texture = new THREE.ImageUtils.loadTexture('animation/sprites/peep.png');
	self.texture.wrapS = self.texture.wrapT = THREE.RepeatWrapping; 
	self.texture.repeat.set( 1/self.sheet.width, 1/self.sheet.height );

	self.material = new THREE.MeshBasicMaterial( { map:self.texture, side:THREE.DoubleSide } );
	self.material.transparent = true;
	self.material.depthWrite = false;
	self.geometry = new THREE.PlaneGeometry(5, 10, 1, 1); // HACK
	self.mesh = new THREE.Mesh(self.geometry, self.material);


	var frame = 0;

	self.draw = function(){

		// FOR FUN
		frame += 0.5;
		//self.y = Math.abs(Math.sin(frame));

		// Translate to ThreeJS coords.
		var pos = self.mesh.position;
		pos.x = self.x;
		pos.y = self.y;
		pos.z = self.z;

		// Face camera always?
		if(self.faceCamera){
			var angle = Math.atan2(self.z,self.x);
			self.mesh.rotation.y = -angle - Math.TAU/4;
		}

		// Draw the correct part of the sprite
		var currentColumn = self.currentFrame % self.sheet.width;
		var currentRow = (self.sheet.height-1) - Math.floor(self.currentFrame/self.sheet.width);
		self.texture.offset.x = currentColumn / self.sheet.width;
		self.texture.offset.y = currentRow / self.sheet.height;

	};

}