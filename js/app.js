var frame = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var running = false;
var width = canvas.width;
var height = canvas.height;


var boule = { 
x: 200,
y: 200,
vx: 5,
vy: 1,
radius : 50,
color : "red",
draw : function() {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
}
}
var boulette = { 
x: 700,
y: 400,
vx: 5,
vy: 1,
radius : 50,
color : 'white',
draw2 : function() {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
}
}


function clear() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0,0,width,height);
}


canvas.addEventListener('mousemove', function(b){
	if (!running) {
		clear();
		boule.x++;
		boule.y++;
		boulette.draw2();
		boule.draw();
	}
})
	