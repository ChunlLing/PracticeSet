<meta charset="utf-8">>
<%
	dim yzm, username, password, notpassword, passt, passd, qq, email, url

	yzm = trim(request.form("yzm"))
	username = trim(request.form("username"))
	password = trim(request.form("password"))
	notpassword = trim(request.form("notpassword"))
	passt = trim(request.form("passt"))
	pasd = trim(request.form("pasd"))
	email = trim(request.form("email"))
	url = trim(request.form("url"))
	qq = trim(request.form("qq"))

	'用户名验证'
	if username = "" or len(username) < 2 then
		response.write "<script>alert('用户名不得为空或者少于两位！');history.back();</script>"
		response.end
	end if

	'密码验证'
	if password = "" or len(password) < 6 then
		response.write "<script>alert('密码不得为空或者少于六位！');history.back();</script>"
		response.end
	end if

	'密码确认'
	if password <> notpassword then
		response.write "<script>alert('密码和确认密码不一致！');history.back();</script>"
		response.end
	end if

	'密码提示'
	if passt = "" or len(passt) < 3 then
		response.write "<script>alert('密码提示不得为空或者少于三位！');history.back();</script>"
		response.end
	end if

	'密码回答'
	if passd = "" or len(passd) < 3 then
		response.write "<script>alert('密码回答不得为空或者少于三位！');history.back();</script>"
		response.end
	end if

	'密码验证'
	if passd = passt then
		response.write "<script>alert('密码提示和密码回答不得一致！');history.back();</script>"
		response.end
	end if

	'电子邮箱'
	dim epos = instr(email, "@")
	dim dpos = instr(epos, email, ".")
	dim emailLen = len(email)
	dim nns = emailLen - dpos

	if email = "" then
		response.write "<script>alert('电子邮箱不得为空！');history.back();</script>"
		response.end
	elseif epos < 1 then
		response.write "<script>alert('电子邮件格式中缺少@符号！');history.back();</script>"
		response.end
	elseif dpos < 1 then
		response.write "<script>alert('电子邮件格式中缺少.符号！');history.back();</script>"
		response.end
	elseif epos < 4 then
		response.write "<script>alert('电电子邮件名必须大于3位！');history.back();</script>"
		response.end
	elseif nns < 2 then
		response.write "<script>alert('域名后缀必须大于2位或等于2位！');history.back();</script>"
		response.end
	end if

	'个人网站'
	if url = "" or url = "http://" then
		url = "该用户还没有个人网站"
	end if

	'qq'
	if qq = "" or len(qq) < 5 or len(qq) > 10 then
		response.write "<script>alert('QQ必须是在5-10位之间！');history.back();</script>"
		response.end
	elseif not isnumeric(qq) then
	response.write "<script>alert('QQ必须是数字！');history.back();</script>"
		response.end
	end if

	'验证码'
	if cint(yzm) <> Session("CheckCode") then
		response.write "<script>alert('验证码错误！');history.back();</script>"
		response.end
	end if
%>