var entypo = require('ti.entypo');
var ui = require('ui');
// var myModels = Alloy.Collections.record;
// var common = require('common');
/**
 * function addItem(e) { alert(e.index); alert(e.data); // var index = e.index;
 * if (e.index % 2 == 0) { e.data.backgroundColor = "#F7F3F2"; } else {
 * e.data.backgroundColor = "#fff"; } common.addItem(myModels); }
 */

// var db=require('recordDB');
var tableData = [];
function loadTableView() {
	var bc;
	for ( var i = 0; i < 10; i++) {
		if (i % 2 == 0) {
			bc = "#F7F3F2";
		} else {
			bc = "#fff";
		}
		var row = Ti.UI
				.createTableViewRow({
					height : 60,
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
					backgroundColor : bc
				});
		var image = Ti.UI.createImageView({
			image : '/images/myimage.png',
			left : 0,
			width : 60,
			height : 60
		});
		// 标题
		var title = Ti.UI.createLabel({
			font : {
				fontSize : '24',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : "艾薇塔",
			textAlign : "center",
			color : '#4A4A4A',
			left : 80,
			top : 20
		});
		var line = Ti.UI.createView({
			height : 60,
			left : '60',
			width : '1dp',
			backgroundColor : "#cecece"
		});
		var arrow = Ti.UI.createLabel({
			text : entypo.fromCodePoint("0xf3c9"),
			right : 10,
			font : {
				fontSize : '20',
				fontFamily : 'soryin'
			}
		});
		row.add(image);
		row.add(line);
		row.add(title);
		row.add(arrow);
		row.arrow = arrow;
		tableData[i] = row;
	}

	$.table.setData(tableData);

}

// 排序按钮出现
$.table.addEventListener('scrollend', function() {
	ui.translate2($.sortView, 0, 0, 0, 0, function() {

	});
});
$.table.addEventListener('scroll', function() {
	ui.translate2($.sortView, 150, 0, 0, 70, function() {

	});
});

// 筛选
$.icon_sort.addEventListener('click', function() {

	$.viewSort.visible = true;

	ui.zoom($.viewSort, function() {
		ui.translate2($.filterView.getView("filterView"), 0, -214, 0, 200,
				function() {
				});
	});

});
$.viewSort.addEventListener('click', function() {
	ui.translate2($.filterView.getView("filterView"), 0, 214, 0, 200,
			function() {
				ui.unzoom($.viewSort, function() {

				});
			});

});

// 创建tableViewRow
loadTableView();
$.icon_sort.text = entypo.fromCodePoint("0xe027");