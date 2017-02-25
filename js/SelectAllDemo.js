;$( function () {
//全选
	$('.selectAll').on('click', '.allSelected1', function(event) {
		if ($(this).prop('checked')) {
			$(':checkbox').prop('checked',true);
			$('.smallItem').css({
				'background-color':'#FFF8E1'
			});
		} else {
			$(':checkbox').prop('checked',false);
			$('.smallItem').css({
				'background-color':'#fcfcfc'
			});
		}
	});

	//取消全选
	function cancelSelect(){
		if ($('.td-inner input').length === $('.td-inner input:checked').length) {
			$('.allSelected1').prop('checked',true);
			$('.allSelected2').prop('checked',true);
		} else {
			$('.allSelected1').prop('checked',false);
			$('.allSelected2').prop('checked',false);
		}
	}

	//点击小列表子项时选中
	$('body').on('click','.td-inner input',function(event){
		if ($(this).prop('checked')) {
			$(this).parents('.smallItem').siblings('.bigItem').find('input').prop('checked',true);
			$(this).parents('.td-inner').css({
				'background-color':'#fff8e1'
			});
                console.log('if' + $(this).parents('.smallItem').siblings('.bigItem').find('input').prop('checked'));
		} else {
            var flag = true;
            //alert($(this).parents('.smallItem').find('.td-chk').length);
            for (var i = 0; i < $(this).parents('.smallItem').find('.td-chk').length; i++) {
                if ($(this).parents('.smallItem').find('input').eq(i).prop('checked')) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
			    $(this).parents('.smallItem').siblings('.bigItem').find('input').prop('checked',false);
            }
			$(this).parents('.td-inner').css({
				'background-color':'#fcfcfc'
			});
		}
		cancelSelect();
	});

	//点击大列表子项时选中
	$('body').on('click','.bigItem input',function(event){
		if ($(this).prop('checked')) {
			$(this).parents('.bigItem').siblings('.smallItem').find('.td-inner input').prop('checked',true);
			$(this).parents('.bigItem').siblings('.smallItem').css({
				'background-color':'#fff8e1'
			});
		} else {
			$(this).parents('.bigItem').siblings('.smallItem').find('.td-inner input').prop('checked',false);
			$(this).parents('.bigItem').siblings('.smallItem').css({
				'background-color':'#fcfcfc'
			});
		}
		cancelSelect();
	});
});