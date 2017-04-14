<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>留言系统</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/face.css">
	<script type="text/javascript">
		function g(face) {
			window.opener.document.reg.face.value = face;
			window.opener.document.reg.faceimg.src = face;
		}
	</script>
</head>
<body style="width: auto;">
	<div id="face">
		<h1>请选择你要的头像</h1>
		<%for i = 1 to 9%>
		<dl>
			<dd><img src="face/m0<%=i%>.gif" alt="头像" onclick="g('face/m0<%=i%>.gif')" /></dd>
		</dl>
		<%next%>
		<%for i = 10 to 64%>
		<dl>
			<dd><img src="face/m<%=i%>.gif" alt="头像" onclick="g('face/m<%=i%>.gif')" /></dd>
		</dl>
		<%next%>
	</div>
</body>
</html>