;$(function () {
	// 邮箱后缀
	var hosts = ['qq.com', 'gmail.com', 'sohu.com', 'sina.com', '163.com'];
	// 动态添加DOM节点
	for (var i = 0; i < hosts.length; i++) {
		var liElement = '<li><span class="inputName"></span>' + '@<span class="emailHost">' + hosts[i] + '</span></li>';
		$('#emailTip').append(liElement);
	}
	$('#emailInput').keyup(function (e) {
		if (e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 13) {
			// 按键非上下方向键和回车键
			if ($.trim($(this).val()) !== '' && $.trim($(this).val()).match(/^@/) == null) {
				// 输入非空字符且不以@开头
				if ($.trim($(this).val()).indexOf('@') == -1) {
					// 还未输入@
					$('#emailTip .inputName').text($(this).val());
				} else {
					// 已经输入@
					var name = $.trim($(this).val()).substring(0, $.trim($(this).val()).indexOf('@')),
						host = $.trim($(this).val()).substring($.trim($(this).val()).indexOf('@') + 1);
					$('.emailHost').each(function () {
						if ($(this).text().match(host) == null) {
							$(this).parent().hide();
						} else {
							$(this).parent().show();
							$('#emailTip').show();
						}
						if (!$('#emailTip li').is(':visible')) {
							$('#emailTip').hide();
						}
					});
				}
			}
		}
	});
});