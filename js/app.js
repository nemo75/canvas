var frame = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var running = false;
var width = canvas.width;
var height = canvas.height;



var boule = { 
x: 100,
y: 100,
vx: 5,
vy: 1,
radius : 25,
color : 'red',
draw : function() {
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fillStyle = this.color;
	ctx.fill();
}
}


function clear() {
  ctx.fillStyle = 'blue';
  ctx.fillRect(0,0,width,height);
}


canvas.addEventListener('mousemove', function(e){
	if (!running) {
		clear();
		boule.x = e.clientX;
		boule.y = e.clientY;
		boule.draw();
	}
});


clear().delay(600);


















/*
function circle (x, y , radius) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(x, y, radius,0, Math.PI*2,true);
	ctx.closePath();
	ctx.fillStyle = 'blue';
	ctx.fill();
}




function draw() {
var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
  	if(frame < 500) {
  	ctx.clearRect(0,0, canvas.width, canvas.height);
  	circle(0 + frame, 0 + frame,25);
  	frame ++;
  }
  else 
  	frame = 0;
}

window.onload = function dessin() {
	var time= window.setInterval(function(){draw()}, 10);
}
*/