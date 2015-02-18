(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.animatic_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.dance("synched",0);
	this.instance.setTransform(77.5,187,1,1,0,0,0,0,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(76));

	// Layer 4
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(292.9,305);

	this.instance_2 = new lib.Symbol2("synched",3);
	this.instance_2.setTransform(292.9,305);

	this.instance_3 = new lib.Symbol2("synched",2);
	this.instance_3.setTransform(292.9,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:292.9,y:305}}]},7).to({state:[{t:this.instance_2,p:{x:292.9,y:305,startPosition:3}},{t:this.instance_1,p:{x:222.9,y:315}}]},23).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:222.9,y:315,startPosition:9}},{t:this.instance_1,p:{x:332.9,y:365}}]},9).wait(37));

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
p.nominalBounds = new cjs.Rectangle(296.5,387,369,428.5);


// symbols:
(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAdEBIAChNQABgxgMgmQgZAsgIArQgBAGgRAcQgRAaAAAPQAAAtgFAXIgKAAQgFgPAAgmIBQjHQgJgUgLgQIADgHQANALALAPIAJgYQAAgVgTgoIgCgFIgRAyQgTAzgTAmIgKgFQAAgPAOgjQAPgkABgRQACgqAHgRQAFgOAIgEIAAgDIgdAAQgTgLgchJQgahGAAgeIgBgTQABgNALgJQAigbCAAHQAjAYAIAgQACAKAAAuQAAAugDALQgJAhgmAPIg+AFIAEAEQAPAGADAFIgEAHQAGAKAGAOIARACQAkAJARBJQAMAzAAAxIAAAYIgFARIgKAAIgMhpQgMgvgfgjQAKAnAAAXQAAAHgSAeQAKAVAFAZQADAUAABOQAABHgCAmIgIAFQgKgggBgsgAgKhsIAEABIAAgBgAhKksQgOAHAAAZQAgCFAaAPIAHgKIBTgIQAXgKAFgbQACgJAAgkQAAglgCgIQgHgagfgTIgvgCQg5AAgUAMg");
	this.shape.setTransform(-0.1,-33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGE3QgXgTgGgMIAAhWQgkBGgHAxIgIAFQgGgEgCgGQgBgFgBgUQABgmAig6QAkg7gBgoIAAgPQgOgPggg3Qgkg5gvgYIACgHQAvANArA1QAZAdAMAcIABgWQgJgCgBgEIAEgHIAGgBIABhbIg4gBQgjgogIgkQgCgNAAg5QAAg5AEgWQCUgmArA/QANATABAdIgCAaQABAwgEAKQgJAdgvApIghAAQACAgAAA3IAKgCQAJgNAnglQAogmAMgHQAZADAGAHQgUAXgwAmIg/AvIgKgBIAAABQACAtgBAbQgBApgKAbQADAdgIAtQABA1A0AfIgBAEQgCAFgEADQgJgEgUgPgAhakLQgDANgBAVQAAAxACALQAHAqAdASIBYAAIAWgaQATgYACgCIAAg1QgBgtgCgIQgHgZghgJIhiAAQgSAOgGAYg");
	this.shape_1.setTransform(1.5,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-66.9,22.2,66.7);


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


(lib.dance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AguDGQgIh8ABg6IAAgMQADACAPACIAQABQAEgCAggDQAkgDAfAAIAQDHIAABvQgIgBgRgBIAAACIhzACIgGhzgAhliUQgXgiABgcQgBgrAngeQAlgcAwgBQA0gCAhAeQAoAjAABDQAAAYgRATQgjAnhaAAQg1AAgfgwg");
	this.shape.setTransform(-3,-41.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyEXIgBAAQgCgEAAgKIACAAQgNkIAAgiIACgMQACgHAJgFIgCANIACgCIAigFQASgDAmgBIAAgDIA1ABQAOBjADBCQABAaAAB6QgBBMgCAkIgFAAIgCgDIAAhgQgRAChBAEIg6ADIABA5IgBAmIgGAAIgEhegAg1geQgBA4AIB7IAGB0IBzgCIAAgDQARABAIACIAAhvIgQjFQgfAAgkADQggACgEACIgQgBQgPgBgDgCIAAAMgAhvjBQgWgeAAgjQAAgzApggQAogeA0gBQA3AAAlAhQArAlAABGQgBAbgTAbQgdAog4AAQhkAAgpg3gAAAlpQgwACglAcQgnAeABArQgBAbAXAjQAfAvA1AAQBaAAAjgnQARgTAAgYQAAhCgogjQgggdgxAAIgEAAg");
	this.shape_1.setTransform(-3,-36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgrDIQgHh9AAg7IABgMQACACAOACIAQABQADgCAegDQAigDAdAAIAODKIAABxQgHgCgQgBIAAACIhrADIgGh2gAheiWQgWgjAAgcQAAgrAlgfQAigcAtgCQAwgBAgAeQAlAkAABDQAAAYgQAUQggAnhVAAQgxAAgdgwg");
	this.shape_2.setTransform(-2.9,-42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvEbIgBAAQgCgEAAgKIACAAQgMkMABgjIABgMQACgHAIgEIgBANIABgDIAggFQARgCAkgCIAAgDIAxACQANBkADBCQABAbAAB8QgBBMgCAlIgEAAIgDgDIAAhhQgPACg+AEIg1AEIABA4IgBAnIgGAAIgEhfgAgygfQAAA5AHB9IAFB2IBrgDIAAgCQARABAHACIAAhyIgOjHQgeAAgiADQgdADgEACIgPgBQgOgCgCgCIgBAMgAhojEQgVgeAAgkQAAgzAnghQAlgeAxgBQA0AAAiAiQAoAmAABGQAAAcgTAbQgbAog1AAQhdAAgmg4gAAAluQgtACgiAcQglAfAAArQAAAcAWAjQAdAwAxAAQBUAAAhgnQAPgUAAgYQAAhDgkgkQgfgdgtAAIgEAAg");
	this.shape_3.setTransform(-2.8,-37.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgxBLIAKgFIAngDIAEgDIBQABIAAD/IiFABgAgnABQhBg6AAh6QAAgMAIggQAIghAHgLQApghAZgLQAvgVAjAaQALAIAOBNQAMBFAAAZQADAjgPAiQgcBAhTAAQgMAAgIgFg");
	this.shape_4.setTransform(-2.5,-39.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhOFeQgOgLgQgBQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgIQAAgLASgKQARgHAHgFQgCgtAAhYIACggQACgbgCgQIgCglQAAgIgGgKQAFgHA9gEIAAgDIBVACIAIALIAAEGIAQAKQAVANAIAJQAAAFgKAIQgGABgNAFQgNAFgDADQgFAGAAgMQAAgIACgBIAGgCIAbgJQgegTgMgKIgKAAQgWgBgBgBIhJADIgQAAIABAAIgoAZIgGADQAmAPAIAMQAAAHgFADQgFgBgRgNgAgLAiIgoADIgKAFIAAD2ICFgBIAAj/IhOgBgAg7gUQgkgcgShBQgNguAAgzQAAgeADgSQAEgYANgUQANgWA2gYQBAgeAlAdQAMAKAPBPQANBGAAAdQACAbgBAHIgPAtQgFANgbAZQgfAegXAAQgSAAgrgGgAgblYQgZALgpAhQgHALgIAhQgIAgAAAMQAAB6BBA8QAHAFANAAQBSAAAdhCQAPgigDgjQAAgZgMhFQgOhNgLgIQgTgOgYAAQgRAAgWAJg");
	this.shape_5.setTransform(-1.2,-36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AguDwQAAg0gFhpQAAg0AGgYIB6ABQAAA5AFBuIAAAzQAAAGgEAEIgBAAIAAABIgBAAIgEADQgGACgLABQg0gDgxAAgAhLhTQgQgjAAgfQAAgkAdgbQAbgbAjgDQAmgDAZAcQAdAhAABCQABAWgLAVQgYAqhAAAQgtAAgYgyg");
	this.shape_6.setTransform(-2.2,-28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA+EMIAVgIQAUgHAJgFIAFgCQgTgEgOgHIgOgHQgoADgDACQhUADgEACIgKgBIAAgCQgPAAgFADQgUADgCAEQABACAWAFIAdAGQgEAIgGACQgegDgNgGQgHgEgPgKQAMgLATgGQARgFARACQAAg3gFgbIAAihICRAAQADBMAFAmIAAB9QAUAFAoARQgCAHgSAFQgZAGgPAMQgNgCgCgDgAhCBCQAFBpAAAzQAzABAyACQALAAAGgDIAEgCIABgBIAAgBIABAAQAEgEAAgGIAAgyQgFhvAAg2Ih5gBQgHAVAAA1gAhqhmQgOgfAEgfQAAgtAgggQAegdAogCQApgCAcAgQAgAkAABGQAAAIgDAQQgEAVgFAIQgHAKgWARQgWAQgHAAQheAAgdg+gAgOkDQgkADgbAaQgdAcAAAkQAAAfARAiQAXAyAtAAQBBAAAXgpQAMgVgCgWQAAhDgdggQgWgaggAAIgIABg");
	this.shape_7.setTransform(-0.7,-26.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgzDnQAAgygGhlQAAgyAHgXICHABQAAA2AGBrIAAAwQAAAGgFAEIgBAAIAAABIAAABIgFACQgHACgMABQg5gDg3AAgAhThQQgSghAAgeQAAgjAggaQAegaAngDQArgCAbAaQAgAgAABAQACAVgNAUQgaAohIAAQgyAAgagwg");
	this.shape_8.setTransform(-2.4,-27.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABFECIAXgHQAXgIAKgEIAFgCQgVgEgQgHIgPgHQgsADgEADQhdACgFACIgKgBIAAgCQgRAAgGADQgWADgDAEQACACAYAFIAgAGQgEAHgGACQgjgDgOgGQgIgDgQgKQANgKAWgGQATgFATACQgCg1gFgaIAAicICiAAQADBKAFAkIAAB5QAXAFAsAQQgBAGgWAFQgbAGgRAMQgNgCgDgDgAhJA/QAFBlAAAyQA5AAA4ADQAMgBAHgCIAEgCIABgBIAAgBIABAAQAEgEABgGIAAgwQgGhrAAg0IiHgBQgHAVAAAygAh2hiQgPgeAEgeQAAgrAkgfQAhgcAtgCQAtgCAfAfQAkAjgBBDQAAAIgDAPQgEAVgFAHQgJAKgZAQQgXAQgIAAQhoAAghg8gAgPj6QgoADgfAaQgfAagBAjQABAeASAhQAaAwAyAAQBHAAAbgoQAMgUgCgVQAAhAgfggQgZgYglAAIgHAAg");
	this.shape_9.setTransform(-0.7,-25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("Ag4DgQAAgwgGhiQAAgxAHgWICVABQAAA0AGBoIAAAvQAAAGgFAEIgBAAIAAABIgBAAIgFACQgHACgOABIh7gDgAhbhNQgUghAAgdQAAgiAjgZQAhgZArgDQAvgCAeAZQAjAfAAA+QACAUgOAUQgdAnhPAAQg2AAgdgug");
	this.shape_10.setTransform(-2.6,-26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABLD7IAagIQAZgHALgEIAGgCQgYgEgRgHIgRgGQgwADgEACQhmACgGADIgLgBIAAgDQgUABgGADQgYACgDAEQADACAaAFIAjAGQgFAGgGADQgmgEgQgFIgagNQAOgKAXgGQAWgEAVABQgCgzgFgZIAAiXICyAAQADBIAFAjIAAB1QAZAFAxAPQgCAGgXAFQgdAGgUAMQgOgCgEgDgAhQA9QAFBiAAAxIB8ACQANAAAIgCIAFgCIAAgBIAAgBIABAAQAGgEAAgGIAAgvQgHhnAAgzIiUAAQgIATABAxgAiChfQgRgeAGgcQgBgqAngeQAkgcAygBQAygCAiAeQAnAiAABBQAAAHgEAPQgFAUgFAHQgKAKgaAPQgbAQgIAAQhzAAgkg6gAgRjyQgsACgiAZQgjAaAAAhQAAAeAVAgQAcAvA3AAQBPAAAdgnQAOgUgDgUQABg/gkgeQgagYgpAAIgIABg");
	this.shape_11.setTransform(-0.7,-25.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AguDDQgIh6ABg5IAAgMQADACAPABIAQABQAEgCAggCQAkgDAfAAIAQDEIAABuQgIgCgRgBIAAADIhzACIgGhygAhliSQgXgiABgbQgBgrAngdQAlgcAwgBQA0gCAhAeQAoAiAABCQAAAYgRASQgjAnhaAAQg1AAgfgvg");
	this.shape_12.setTransform(-3,-40.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgyETIgBAAQgCgEAAgJIACAAQgNkFAAghIACgNQACgHAJgEIgBAMIABgCIAigFQASgCAmgCIAAgCIA1ABQAOBiADBAQABAaAAB5QgBBKgCAkIgFAAIgCgDIAAheQgRAChBADIg6AEIABA3IgBAmIgGAAIgEhdgAg1geQgBA3AIB6IAGBzIBzgDIAAgCQARABAIACIAAhuIgQjDQgfAAgkADQggADgEACIgQgBQgPgCgDgCIAAAMgAhvi+QgWgeAAgjQAAgyApggQAogdA0gBQA3AAAlAhQArAlAABEQgBAbgTAbQgdAng4AAQhkAAgpg2gAAAlkQgwACglAbQgnAeABAqQgBAbAXAiQAfAvA1AAQBaAAAjgmQARgTAAgYQAAhBgogjQgggcgxAAIgEAAg");
	this.shape_13.setTransform(-3,-36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF00FF").ss(1,1,1).p("AkrnpIJXAAIAAPTIpXAAg");
	this.shape_14.setTransform(0,-49);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-99,62,100);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;