<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>留言系统</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/reg.css">
</head>
<body>
	<!-- #include file = "header.asp" -->

	<div id="reg">
		<h1>会员注册</h1>
		<form name="reg" method="post">
			<div>
				<dl>
					<dt>以下均为必填项</dt>
					<dd>
						<label class="text">用户名</label>：<input type="text" name="username" class="text" />
					</dd>
					<dd>
						<label class="text">密码</label>：<input type="password" name="password" class="text" />
					</dd>
					<dd>
						<label class="text">密码确认</label>：<input type="password" name="notpassword" class="text" />
					</dd>
					<dd>
						<label class="text">密码提示</label>：<input type="text" name="passt" class="text" />
					</dd>
					<dd>
						<label class="text">密码回答</label>：<input type="text" name="passd" class="text" />
					</dd>
					<dd>
						<label class="text">性别</label>：
						<input type="radio" name="sex" value="男" />男
						<input type="radio" name="sex" value="女" checked="checked" />女
					</dd>
					<dd>
						<label class="text">头像</label>：<input type="hidden" name="face" value="face/m01.gif" /><a href="#" onclick="javascript:window.open('face.asp', 'face', 'width=400, height=400, scrollbars=1')"><img src="face/m01.gif" id="faceimg" class="face" alt="头像1"></a>
					</dd>
					<dd>
						<label class="text">电子邮件</label>：<input type="text" name="email" class="text" />
					</dd>
					<dd>
						<label class="text">个人网站</label>：<input type="text" name="url" value="http://" class="text" />
					</dd>
					<dd>
						<label class="text">Q Q</label>：<input type="text" name="qq" class="text" />
					</dd>
					<dd>
						<label class="text">验证码</label>：<input type="text" name="yzm" class="text yzm" /><img src="code.asp" alt="验证码">
					</dd>
					<dd>
						<input type="submit" value="注册会员" class="submit" />
					</dd>
				</dl>
			</div>
		</form>
	</div>

	<!-- #include file = "footer.asp" -->
</body>
</html>