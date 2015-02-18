(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.animatic_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.dot2 = new lib.Symbol1();
	this.dot2.setTransform(152.9,236);

	this.timeline.addTween(cjs.Tween.get(this.dot2).to({x:204,y:283},19,cjs.Ease.get(-1)).to({x:249.8,y:325},17,cjs.Ease.get(1)).to({x:202.6,y:281.7},19,cjs.Ease.get(-1)).to({x:152.9,y:236},20,cjs.Ease.get(1)).wait(1));

	// Layer 1
	this.dot = new lib.Symbol1();
	this.dot.setTransform(338.9,184);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(7).to({x:337.9,y:182},0).to({x:332.9,y:177},2).to({x:343.9,y:190},2).to({x:347.9,y:215},2).to({x:337.9,y:265},2).to({x:268.9,y:316},2).to({x:158.9,y:286},2).to({x:142.9,y:236},2).to({x:147.9,y:211},2).to({x:152.9,y:205},2).to({x:151.9,y:208},2).to({x:150.9,y:224},2).to({x:152.9,y:238},2).to({x:155.9,y:242},2).to({x:153.9,y:238},2).to({x:152.9,y:236},2).wait(9).to({x:249.1,y:209.1},15,cjs.Ease.get(-1)).to({x:338.9,y:184},14,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.stage = new lib.stage();
	this.stage.setTransform(250,400);

	this.timeline.addTween(cjs.Tween.get(this.stage).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(334.6,431.1,330.9,384.4);


// symbols:
(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAJQgGgFABgCQAAgNAIgJQANgOAdAKQAAACAEAFQAEAFgBAMQAAAQgCADIgCAAIgJAEQgJAFgHABIgXgUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-2.9,6,6);


(lib.stage = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgIZxIAA5pI5oAAIgFgHIAGgEIAEgEIZjACIAA5rIAIgFIAEAGIAEAEIgCZmQZsACAEAEIgFAHI5rAAQgDZqgDAEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-165.4,-165.4,330.9,330.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;