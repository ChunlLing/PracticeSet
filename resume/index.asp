<%
	response.charset = "utf-8"
%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>RESUME</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<%
		if request.form("send") = "make" then
	%>
	<div class="container">
		<form method="post" action="index.asp" class="diy">
			<p class="text"><label class="text">姓名：</label><input type="text" name="username" /></p>
			<p class="text"><label class="text">出生年月：</label><input type="text" name="age" /></p>
			<p class="text"><label class="text">籍贯：</label><input type="text" name="origin" /></p>
			<p class="text"><label class="text">学历：</label><input type="text" name="education" /></p>
			<p class="text"><label class="text">手机：</label><input type="text" name="mobile" /></p>
			<p class="text"><label class="text">邮箱：</label><input type="text" name="email" /></p>
			<p class="text"><label class="text">求职意向：</label><input type="text" name="intension" /></p>
			<p class="text"><label class="text">教育信息：</label><textarea name="edu"></textarea></p>
			<p class="text"><label class="text">技能水平：</label><textarea name="skill"></textarea></p>
			<p class="text"><label class="text">相关经验：</label><textarea name="experience"></textarea></p>
			<p class="text"><label class="text">自我评价：</label><textarea name="about"></textarea></p>
			<p class="text"><label class="text">上传照片：</label><input type="file" accept="image/jpeg,image/png" name="photo" /><img class="preview" style="width: 40px" />
			<input type="hidden" name="photoPath" class="photoPath"></p>
			<script type="text/javascript">
				var fileInput = document.querySelector("input[type='file']");
				var preview = document.querySelector('.preview');
				var path = document.querySelector('.photoPath');
				fileInput.addEventListener('change', function () {
					var file = fileInput.files[0];
					var reader = new FileReader();
					if (file.type != 'image/jpeg') {
						preview.style.width = 'auto';
						preview.src = '/';
						preview.alt = '请上传jpg后缀的文件';
						return
					}
					reader.onload = function (e) {
						var data = e.target.result;
						preview.src = data;
						console.log(path.value);
						path.value = data;
						console.log(path.value);
					}
					reader.readAsDataURL(file);
				});
			</script>
			<p class="text"><button type="submit" name="send" value="go" class="btn">制作</button><a href="index.asp">返回我的主页</a></p>
		</form>
	</div>
	<%
		elseif request.form("send") = "go" then
	%>
	<p><%=request.form("experience")%></p>
		<div id="diy" class="container">
			<div class="info">
				<ul>
					<li class="text username"><%=request.form("username")%></li>
					<li class="text age"><%=request.form("age")%></li>
					<li class="text origin"><%=request.form("origin")%></li>
					<li class="text education"><%=request.form("education")%></li>
					<li class="text mobile"><%=request.form("mobile")%></li>
					<li class="text email"><%=request.form("email")%></li>
				</ul>
				<img src="<%=request.form("photoPath")%>" alt="照片">
			</div>
			<div class="intension">
				<p  class="text">
					<span class="text">求职意向：</span>
					<span class="text"><%=request.form("intension")%></span>
				</p>
			</div>
			<div class="content">
				<ul>
					<li class="item edu">
						<h1>教育信息</h1>
						<div class="item-content">
							<p class="text"><%=request.form("edu")%></p>
						</div>
					</li>
					<li class="item skill">
						<h1>技能水平</h1>
						<div class="item-content">
							<p class="text"><%=request.form("skill")%></p>
						</div>
					</li>
					<li class="item experience">
						<h1>相关经验</h1>
						<div class="item-content">
							<p  class="text"><%=request.form("experience")%></p>
						</div>
					</li>
					<li class="item about">
						<h1>自我评价</h1>
						<div class="item-content">
							<p class="text"><%=request.form("about")%></p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="other">
			<form method="post" action="index.asp">
				<button type="submit" name="send" value="make" class="btn">点击制作简历</button>
			</form>
			<p class="text"><a href="index.asp">返回我的主页</a></p>
		</div>
	<%
		else
	%>
		<div id="my-resume" class="container">
			<div class="info">
				<ul>
					<li class="text username">许纯玲</li>
					<li class="text age">1995.04</li>
					<li class="text origin">广东·汕头</li>
					<li class="text education">本科</li>
					<li class="text mobile">188 1397 5077</li>
					<li class="text email">xcl8202@qq.com</li>
				</ul>
				<img src="images/head.jpg" alt="照片">
			</div>
			<div class="intension">
				<p  class="text">
					<span class="text">求职意向：</span>
					<span class="text">网页设计相关</span>
				</p>
			</div>
			<div class="content">
				<ul>
					<li class="item edu">
						<h1>教育信息</h1>
						<div class="item-content">
							<p class="text">2013.9 – 2017.6&emsp;&emsp;&emsp;<a href="http://www.jyu.edu.cn/">嘉应学院</a> 数学学院 信息与计算科学专业</p>
						</div>
					</li>
					<li class="item skill">
						<h1>技能水平</h1>
						<div class="item-content">
							<p class="skill-item">熟练运用HTML和CSS对网页进行布局，了解Bootstrap框架的使用</p>
							<p class="skill-item">拥有良好的JavaScript基础，能编写原生JS代码和使用jQuery</p>
							<p class="skill-item">熟练使用Dreamweaver、Sublime、Photoshop等软件进行网页编写设计</p>
							<p class="skill-item">会使用Git的基本操作进行版本控制</p>
							<p class="skill-item">具备基本的英语表达能力</p>
						</div>
					</li>
					<li class="item experience">
						<h1>相关经验</h1>
						<div class="item-content">
							<p  class="text">
								<a href="https://chunlling.github.io/ABird">一只鸟</a>：可实现游客浏览教程贴、用户注册登录、会员发帖功能的手工教程网站。使用Bootstrap构建网页的主体样式和响应式布局，使用jQuery完成表单提交、向后台请求数据，动态加载数据等。
							</p>
							<p  class="text">
								<a href="https://chunlling.github.io/TMallImitation/">电商网站模仿</a>：模仿天猫商城完成主页、注册页、登录页、商品分类页、商品详情页等页面的设计，使用原生JS监听和捕获用户行为事件并作出适当的反馈。
							</p>
							<p  class="text">
								<a href="https://chunlling.github.io/">个人博客</a>：使用Hexo+github搭建的个人博客，基于既有主题根据个人喜好对网站样式功能进行修改。
							</p>
						</div>
					</li>
					<li class="item about">
						<h1>自我评价</h1>
						<div class="item-content">
							<p class="text">我喜欢研究碰到的各种技术并寻找合适的解决方法，不给自己设置边界，愿意学习任何接触到的技术。</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="other">
			<form method="post" action="index.asp">
				<button type="submit" name="send" value="make" class="btn">点击制作简历</button>
			</form>
		</div>
	<%
		end if
	%>
</body>
</html>