window.onload = function () {
	var table = document.querySelector('#cartTable');				// 购物车表格
	var selectInputs = document.querySelectorAll('.check');			// 所有复选框
	var checkAllInputs = document.querySelectorAll('.check-all');	// 全选
	var checkOneInputs = document.querySelectorAll('.check-one');
	var tr = table.children[1].rows;								// 行
	var selectedTotal = document.querySelector('#selectedTotal');		// 已选商品
	var priceTotal = document.querySelector('#priceTotal');
	var selectedViewList = document.querySelector('#selectedViewList');
	var selected = document.querySelector('#selected');
	var foot = document.querySelector('#foot');
	var deleteAll = document.querySelector('#deleteAll');

	getTotal();

	for (let i = 0; i < tr.length; i++) {
		getSubtotal(tr[i]);
		tr[i].onclick = function (e) {
			let target = e.srcElement;
			let cl = target.className;
			let count = this.querySelectorAll('input')[1];
			let value = parseInt(count.value);
			switch (cl) {
				case 'add':
					count.value++;
					getSubtotal(this);
					break;
				case 'reduce':
					if (value > 1) {
						count.value--;
						getSubtotal(this);
					}
					break;
				case 'delete':
					var conf = confirm('确定要删除该商品？');
					if (conf) {
						this.parentNode.removeChild(this);
					}
					break;
			}
			getTotal();
		};
		tr[i].querySelectorAll('input')[1].onkeyup = function () {
			let val = parseInt(this.value);
			if (isNaN(val) || val <= 0) {
				val = 1;
			}
			if (this.value != val) {
				this.value = val;
			}
			getSubtotal(this.parentNode.parentNode);
			getTotal();
		};
	}

	for (let i = 0; i < selectInputs.length; i++) {
		selectInputs[i].onclick = function () {
			let flag = true;
			if (this.className.indexOf('check-all') != -1) {
				for (let j = 0; j < selectInputs.length; j++) {
					selectInputs[j].checked = this.checked;
				}
			}
			for (let j = 0; j < checkOneInputs.length; j++) {
				if (!checkOneInputs[j].checked) {
					flag = false;
				}
			}
			for (let j = 0; j < checkAllInputs.length; j++) {
				checkAllInputs[j].checked = flag ? true : false;
			}
			getTotal();
		}
	}

	selected.onclick = function () {
		if (selectedTotal.innerText != 0) {
			foot.className = (foot.className.indexOf('show') == -1 ? 'foot container show' : 'foot container');
		}
	};

	selectedViewList.onclick = function (e) {
		let target = e.srcElement;
		if (target.className == 'del') {
			var input = tr[target.getAttribute('index')].querySelectorAll('input')[0];
			input.checked = false;
			input.onclick();
		}
	}

	deleteAll.onclick = function () {
		if (selectedTotal.innerText != 0) {
			let conf = confirm('确定删除所选商品？');
			if (conf) {
				for (let i = 0; i < tr.length; i++) {
					if (tr[i].querySelectorAll('input')[0].checked) {
						tr[i].parentNode.removeChild(tr[i]);
						i--;
					}
				}
			}
		} else {
			alert('请选择商品');
		}
		getTotal();
	};

	function getSubtotal(tr) {
		var cells = tr.cells;
		var price = parseFloat(cells[2].innerText);
		var num = parseInt(cells[3].querySelector('.count-input').value);
		var subtotal = price * num;
		var subtract = tr.querySelectorAll('span')[1];
		cells[4].innerText = subtotal.toFixed(2);
		if (num == 1) {
			subtract.innerText = '';
		} else {
			subtract.innerText = '-';
		}
	}

	function getTotal() {
		var num = 0, price = 0, html = '';
		for (let i = 0; i < tr.length; i++) {
			if (tr[i].querySelectorAll('input')[0].checked) {
				num += parseInt(tr[i].querySelectorAll('input')[1].value);
				price += parseFloat(tr[i].cells[4].innerText);
				html += '<div><img src="' + tr[i].cells[1].querySelector('img').src + '"><span class="del" index="' + i + '">取消选择</span></div>';
			}
		}
		selectedTotal.innerText = num;
		priceTotal.innerText = price.toFixed(2);
		selectedViewList.innerHTML = html;
		if (num == 0) {
			console.log(foot.className);
			foot.className = 'foot container';
		}
	}
}