$(function () {
	var a_canvas = $('#a_canvas')[0],
		ctx = a_canvas.getContext('2d'),
		p = 0;
	
	// 设置定时器
	setInterval(function () {
	
		// 清除画布
		ctx.clearRect(0, 0, a_canvas.width, a_canvas.height);
		
		// 改变位置。如果坐标值超过250则回到左上角重新开始动画
		if (p++ > 250) {
			p = 0;
		}
		
		// 画矩形
		ctx.fillStyle = 'rgb(0, 0, 255)';
		ctx.fillRect(p, p, 50, 50);
	},30);
});