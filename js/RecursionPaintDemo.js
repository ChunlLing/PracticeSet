
var drawTree = function (ctx, startX, startY, length, angle, depth, branchWidth) {
	var rand = Math.random,
		newLength, newAngle, newDepth, maxBranch = 3,
		endX, endY, maxAngle =  Math.PI / 2,
		subBranches, lenShrink;
	
	// 画一棵树枝，根据角度向左或向右倾斜
	// 第一棵树枝笔直向上绘制(初始参数angle为90度)
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	endX = startX + length * Math.cos(angle);
	endY = startY + length * Math.sin(angle);
	ctx.lineCap = 'round';
	ctx.lineWidth = branchWidth;
	ctx.lineTo(endX, endY);
	
	// 如果深度接近末尾，使用绿色绘制
	if (depth <= 2) {
		ctx.strokeStyle = 'rgb(0, ' + (((rand() * 64) + 128) >> 0) + ', 0)';
	}
	
	// 否则使用棕红色绘制
	else {
		ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ', 50, 25)';
	}
	
	ctx.stroke();
	
	// 递归减小深度
	newDepth = depth - 1;
	
	// 如果已经到树枝末梢，停止递归
	if (!newDepth) {
		return;
	}
	
	// 随机设置子树枝数，范围在1-3
	subBranches = (rand() * (maxBranch - 1)) + 1;
	
	// 新树枝的宽度小于父树枝
	branchWidth *= 0.7;
	
	// 设置新子树枝的角度、长度为随机值，以新子树枝为父树枝递归调用drawTree()
	for (var i = 0; i < subBranches; i++) {
		newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
		newLength = length * (0.7 + rand() * 0.3);
		drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth);
	}
};

$(function () {
	var canvas = document.getElementById('mycanvas');
	var ctx = canvas.getContext('2d');
	drawTree(ctx, 550, 540, 60, -Math.PI / 2, 12, 12);
//	drawTree(ctx, 800, 300, 40, -Math.PI / 2, 10, 10);
});