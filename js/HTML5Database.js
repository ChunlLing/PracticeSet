$(function () {
	initDatabase();
		showAllTheData();
	$("#btnSave").click(function () {
		var txtName = $("#txtName").val();
		var txtTitle = $("#txtTitle").val();
		var txtWords = $("#txtWords").val();
		if (!(txtName)) {
			alert("请输入用户名");
			return;
		}
		var db = getCurrentDb();
		db.transaction(function (trans) {
			trans.executeSql("insert into Demo(uName, title, words) values(?,?,?)", [txtName, txtTitle, txtWords], function (ts, data) {}, function (ts, message) {
				alert(message);
			});
		});
		showAllTheData();
	});
	$("#btnClear").click(function () {
		clearAllTheData();
	});
});


function getCurrentDb() {
	var db = openDatabase("myDb", "1.0", "demo DB", 1024 * 1024);
	return db;
}
function initDatabase() {
	var db = getCurrentDb();
	if (!db) {
		alert("您的浏览器不支持HTML5本地数据库");
		return;
	}
	db.transaction(function (trans) {
		trans.executeSql(
			"create table if not exists Demo(uName text null, title text null, words text null)", 
			[], 
			function (trans, result) {}, 
			function (trans, message) {}
		);
	});
}
function showAllTheData() {
	$("#tblData").empty();
	var db = getCurrentDb();
	db.transaction(function (trans) {
		trans.executeSql("select * from Demo ", [], function (ts, data) {
			if (data) {
				for (var i = 0; i < data.rows.length; i++) {
					appendDataToType(data.rows.item(i));
				}
			}
		}, function (ts, message) {
			alert(message);
		});
	});
}
function appendDataToType(data) {
	var txtName = data.uName;
	var txtTitle = data.title;
	var words = data.words;
	var strHtml = "";
	strHtml += "<tr>" + "<td>" + txtName + "</td>" + "<td>" + txtTitle + "</td>" + "<td>" + words + "</td>" + "</tr>";
	$("#tblData").append(strHtml);
}
function clearAllTheData() {
	$("#tblData").empty();
	var db = getCurrentDb();
	db.transaction(function (trans) {
		trans.executeSql("DELETE FROM Demo", [], function (ts, data) {}, function (ts, message) {
			alert(message);
		});
	});
	showAllTheData();
}
