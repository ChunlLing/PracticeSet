var myCanvas = document.querySelector('#myCanvas');
var ctx = myCanvas.getContext('2d');

// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 100, 100);

// ctx.font = 'bold 48px 微软雅黑';
// ctx.fillText('Hello World', 20, 200);

// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.rect(20, 20, 300, 400);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = '#0ff';
// ctx.arc(300, 200, 100, 0, 2*Math.PI, true);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.strokeStyle = '#0ff';
// ctx.arc(300, 200, 100, 0, 1/3*Math.PI, false);
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = '#0ff';
// ctx.arc(300, 200, 100, 0, 1/3*Math.PI, true);
// ctx.closePath();
// ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = '#0ff';
// ctx.arc(300, 200, 100, 0, 3/2*Math.PI, false);
// ctx.stroke();
// ctx.fill();
// ctx.closePath();

// 运动的太极
var i = 1;

setInterval(sport, 40);
// createTaiJi();

function sport() {
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.rect(0, 0, myCanvas.width, myCanvas.height);
	ctx.fill();
	ctx.closePath();
	if (i == 16) {
		i--;
	} else if (i == 0) {
		i++;
	}
	ctx.translate(200, 200);
	ctx.rotate(Math.PI*i/8);
	ctx.translate(-200, -200);
	createTaiJi();
	console.log(i);
};
function createTaiJi() {
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.arc(200, 200, 100, 0, Math.PI*2, false);
	ctx.stroke();
	ctx.closePath();

	// 左半圆（黑）
	ctx.beginPath();
	ctx.fillStyle = '#000';
	ctx.arc(200, 200, 100, Math.PI*1/2, Math.PI*3/2, false);
	ctx.fill();
	ctx.closePath();

	// 右半圆（白）
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(200, 200, 100, Math.PI*1/2, Math.PI*3/2, true);
	ctx.fill();
	ctx.closePath();

	// 上小圆（黑）
	ctx.beginPath();
	ctx.fillStyle = '#000';
	ctx.arc(200, 150, 50, 0, Math.PI*2, false);
	ctx.fill();
	ctx.closePath();

	// 下小圆（白）
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(200, 250, 50, 0, Math.PI*2, false);
	ctx.fill();
	ctx.closePath();

	// 上小圆（白）
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(200, 150, 20, 0, Math.PI*2, false);
	ctx.fill();
	ctx.closePath();

	// 下小圆（黑）
	ctx.beginPath();
	ctx.fillStyle = '#000';
	ctx.arc(200, 250, 20, 0, Math.PI*2, false);
	ctx.fill();
	ctx.closePath();
};