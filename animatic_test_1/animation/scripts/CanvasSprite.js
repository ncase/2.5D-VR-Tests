/***

CanvasSprite:

Should take a createjs.DisplayObject instance and render it to a canvas-as-texture.

***/
function CanvasSprite(mc){

	var self = this;
	self.isSprite = true;

	self.x = 0;
	self.y = 0;
	self.z = 0;

	self.faceCamera = true;

	// HACK //
	self.mc = mc;
	self.bounds = mc.nominalBounds;

	// SCALE
	self.resolution = 5;

	// create a canvas element
	self.canvas = document.createElement('canvas');
	self.canvas.width = self.bounds.width * self.resolution;
	self.canvas.height = self.bounds.height * self.resolution;
	self.context = self.canvas.getContext('2d');

	// Cache & config
    self.drawn = false;
    if(self.mc.frame_0){
    	self.mc.frame_0.call(self);
    }
    
	// Create a texture that uses a canvas
	self.texture = new THREE.Texture(self.canvas) 
	self.texture.needsUpdate = true;

	// Transparent material
    self.material = new THREE.MeshBasicMaterial({map:self.texture, side:THREE.DoubleSide});
    self.material.transparent = true;
    self.material.depthWrite = false;

    // Geometry & mesh - pivot point should be origin point in MC.
    self.geometry = new THREE.PlaneGeometry(self.bounds.width, self.bounds.height);
    self.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-self.bounds.width/2,-self.bounds.height/2,0));
    self.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-self.bounds.x,-self.bounds.y,0));
    self.mesh = new THREE.Mesh(self.geometry, self.material);

    // Floor?
    if(self.floor){
    	self.y = -1;
    }

	self.draw = function(){

		// Redraw? (Cache by default)
		if(!self.drawn || self.isAnimated){
			var ctx = self.context;
			ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
			//ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
			ctx.save();
			ctx.scale(self.resolution,self.resolution);
			ctx.translate(-self.bounds.x,-self.bounds.y);
			self.mc.draw(self.context);
			ctx.restore();

			self.texture.needsUpdate = true;
			self.drawn = true;
		}

		// Translate to ThreeJS coords.
		self.x = self.mc.x - root._stage.x;
		self.z = self.mc.y - root._stage.y;
		var pos = self.mesh.position;
		pos.x = self.x;
		pos.y = self.y;
		pos.z = self.z;

		// FLOOR
		if(self.floor){

			// Flat down
			self.mesh.rotation.x = -Math.TAU/4;

		// NORMAL PROP
		}else{

			// Face camera always?
			if(self.faceCamera){
				var angle = Math.atan2(self.z,self.x);
				self.mesh.rotation.y = -angle - Math.TAU/4;
			}

		}

	};

}