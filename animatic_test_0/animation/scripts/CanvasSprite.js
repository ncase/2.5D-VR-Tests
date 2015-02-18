/***

CanvasSprite:

Should take a createjs.DisplayObject instance and render it to a canvas-as-texture.

***/
function CanvasSprite(){

	var self = this;

	self.x = 0;
	self.y = 0;
	self.z = 0;

	self.displayObject = null;
	self.faceCamera = true;

	// HACK //
	self.dance = new lib.dance();
	self.bounds = lib.dance.prototype.nominalBounds;
	//self.dance = root.instance;

	// SCALE
	self.resolution = 5;

	// create a canvas element
	self.canvas = document.createElement('canvas');
	self.canvas.width = self.bounds.width * self.resolution;
	self.canvas.height = self.bounds.height * self.resolution;
	self.context = self.canvas.getContext('2d');
    
	// canvas contents will be used for a texture
	self.texture = new THREE.Texture(self.canvas) 
	self.texture.needsUpdate = true;
    self.material = new THREE.MeshBasicMaterial({map:self.texture, side:THREE.DoubleSide});
    self.material.transparent = true;
    self.geometry = new THREE.PlaneGeometry(self.bounds.width, self.bounds.height);
    self.mesh = new THREE.Mesh(self.geometry, self.material);

	self.draw = function(){

		var ctx = self.context;
		ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
		ctx.save();
		ctx.scale(self.resolution,self.resolution);
		ctx.translate(-self.bounds.x,-self.bounds.y);
		self.dance._tick();
		self.texture.needsUpdate = true;
		self.dance.draw(self.context);
		ctx.restore();

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

	};

}