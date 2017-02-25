$(function () {
	(function () {
	
		var fastSin = function (steps) {
			var table = [],
				ang =0,
				angStep = (Math.PI * 2) / steps;
			do {
				table.push(Math.sin(ang));
				ang += angStep;
			} while (ang < Math.PI * 2);
			return table;
		};
		
		// 创建一个sine()的查找表，保存在变量sinTable[]中
		var sinTable = fastSin(4096),
			$drawTarget = $('#draw-target'),
			divs = '',
			i, bars, x = 0;
		
		// 通过更新许多1像素宽的div的高度和位置，画出一个正弦波
		var drawGraph = function (ang, freq,height) {
		// amg:正弦波的开始角度
		// freq:正弦波的频率，定义了波的“紧密度”
		// 正弦波的幅度，也影响画线的宽度
			var height2  = height * 2;
			for (var i = 0; i < 480; i++) {
				bars[i].style.top = 160 - height + sinTable[(ang + (i * freq)) & 4095] * height + 'px';
				bars[i].style.height = height2 + 'px';
			}
		};
		
		// 创建480个1像素宽的元素
		for (i = 0; i < 480; i++) {
			divs += '<div style = "position:absolute;width:1px;height:40px;background-color:#0d0;top:0px;left:' + i + 'px;"></div>';
		}
		$drawTarget.append(divs);
		bars = $drawTarget.children();
		
		// 以连续变化的参数，重复调用drawGraph(),创造出动画效果
		setInterval(function () {
			drawGraph(x * 50, 32 - (sinTable[(x * 20) & 4095] * 16), 50 - (sinTable[(x * 10) & 4095] * 20));
			x++;
		}, 20);
	})();
});