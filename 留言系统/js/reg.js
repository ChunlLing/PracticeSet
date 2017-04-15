function check() {
	var atpos = document.reg.email.value.indexOf('@', 1);
	var pepos = document.reg.email.value.indexOf('.', atpos);

	if (document.reg.username.value == '') {
		alert('请输入用户名！');
		document.reg.username.focus();
		return false;
	}
	if (document.reg.username.value.length < 2) {
		alert('用户名不得少于2位！');
		document.reg.username.focus();
		return false;
	}
	if (document.reg.password.value == '') {
		alert('请设置密码！');
		document.reg.password.focus();
		return false;
	}
	if (document.reg.password.value.length < 6) {
		alert('密码不得小于6位！');
		document.reg.password.focus();
		return false;
	}
	if (document.reg.notpassword.value == '') {
		alert('请输入确认密码！');
		document.reg.notpassword.focus();
		return false;
	}
	if (document.reg.notpassword.value != document.reg.password.value) {
		alert('两次密码输入不一致，请重新确认密码！');
		document.reg.notpassword.focus();
		return false;
	}
	if (document.reg.passt.value == '') {
		alert('请输入密码提示！');
		document.reg.passt.focus();
		return false;
	}
	if (document.reg.passd.value == '') {
		alert('请输入密码回答！');
		document.reg.passd.focus();
		return false;
	}
	if (document.reg.passt.value == document.reg.passd.value) {
		alert('密码提示和密码回答不得一致！');
		document.reg.passd.focus();
		return false;
	}
	if (document.reg.email.value == '') {
		alert('请输入邮箱！');
		document.reg.email.focus();
		return false;
	}
	if (atpos == -1) {
		alert('输入的邮箱中缺少@');
		document.reg.email.focus();
		return false;
	}
	if (document.reg.email.value.indexOf('@', atpos + 1) != -1) {
		alert('邮箱中不得有2个@！');
		document.reg.email.focus();
		return false;
	}
	if (pepos == -1) {
		alert('输入的邮箱中缺少.');
		document.reg.email.focus();
		return false;
	}
	if (document.reg.email.value.length < pepos + 3) {
		alert('邮箱域名中.后至少2个字符！');
		document.reg.email.focus();
		return false;
	}
	if (document.reg.url.value == '' || document.reg.url.value == 'http://') {
		alert('个人网站网址不得为空！');
		document.reg.url.focus();
		return false;
	}
	if (document.reg.qq.value == '') {
		alert('请输入QQ！');
		document.reg.qq.focus();
		return false;
	}
	if (isNaN(document.reg.qq.value)) {
		alert('QQ必须为数字！');
		document.reg.qq.focus();
		return false;
	}
	if (document.reg.qq.value.length < 5 || document.reg.qq.value.length > 10) {
		alert('QQ必须在5-10位之间！');
		document.reg.qq.focus();
		return false;
	}
	if (document.reg.yzm.value.length != 4) {
		alert('验证码必须是4位！');
		document.reg.yzm.focus();
		return false;
	}
	return true;
}