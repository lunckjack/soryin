var entypo = require('ti.entypo');
var ui = require('ui');

/**
 * //绑定事件
 * 
 * @param {Object}
 *            table
 */
function bindTableEvent(table, options) {

	var bgColor = options.bgColor;
	// 选中后的颜色
	var selColor = options.selColor;
	var prevrow = 0;
	var isOpen = false;
	// table 点击事件
	table.addEventListener('click', function(e) {
		if (!e.row.isSub) {

			if (e.row.isOpen) {
				e.row.isOpen = false;
				isOpen = false;
				ui.rotate(e.row.arrow, 0, 250, function() {
				});
				table.deleteRow(e.index + 1);

				e.row.backgroundColor = bgColor;
				changeBgColor(e, Alloy.Globals.soryinKwGrayColor);
			} else {

				e.row.isOpen = true;
				ui.rotate(e.row.arrow, 90, 250, function() {
				});
				if (prevrow >= e.index) {
					setTimeout(function() {
						table.scrollToTop(e.index * 50, {
							animated : true
						});
					}, 100);
				} else {
					if (isOpen) {
						setTimeout(function() {
							table.scrollToTop((e.index - 1) * 50, {
								animated : true
							});
						}, 100);
					} else {
						setTimeout(function() {
							table.scrollToTop(e.index * 50, {
								animated : true
							});
						}, 100);
					}
				}
				isOpen = true;
				prevrow = e.index;
				table.insertRowAfter(e.index, e.row.subrow);
				var rows = table.data[0].rows;
				for (i = 0; i < rows.length; i++) {
					if (rows[i].isOpen && i != e.index) {
						ui.rotate(rows[i].arrow, 0, 250, function() {
						});
						table.deleteRow(i + 1);
						rows[i].isOpen = false;
					}
				}
				e.row.backgroundColor = '#fff';
				changeBgColor(e, selColor);
			}
		}
	});

}

function changeBgColor(e, curColor) {
	e.row.iconView.color = curColor;
	e.row.titleView.color = curColor;
	e.row.arrow.color = curColor;
	e.row.line.backgroundColor = '#cbcbcb';
}

// options
exports.ckTableView = function(options) {
	// 数据
	var tableData = [];
	var table = options.table;
	// 图标&标题
	var descs = options.descs;
	// 默认背景颜色
	var bgColor = options.bgColor;
	// 选中后的颜色
	var selColor = options.selColor;

//	var tableHeight=0;
	for (i = 0; i < descs.length; i++) {
		var icon = descs[i].icon;
		var title = descs[i].title;
		var subView = descs[i].subView;
//		tableHeight += subView.getHeight();
		// row 一行
		var row = Ti.UI
				.createTableViewRow({
					height : '60',
					selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.BLUE,
					backgroundColor : bgColor,
					selectedBackgroundColor : 'transparent',
				});

		// icon
		var iconView = Ti.UI.createLabel({
			text : entypo.fromCodePoint(icon),
			left : '10',
			font : {
				fontSize : '30',
				fontFamily : 'soryin'
			},
			color : Alloy.Globals.soryinKwGrayColor,
		});

		// 标题
		var titleView = Ti.UI.createLabel({
			font : {
				fontSize : '24',
				fontFamily : 'HiraginoSansGB-W3',
			},
			text : title,
			textAlign : "center",
			color : Alloy.Globals.soryinKwGrayColor,
			left : '80',
			top : '15'
		});

		var line = Ti.UI.createView({
			height : '60',
			left : '60',
			width : 1,
			backgroundColor : "#CBCBCB"
		});

		var arrow = Ti.UI.createLabel({
			text : entypo.fromCodePoint("0xe011"),
			right : 10,
			font : {
				fontSize : 30,
				fontFamily : 'soryin'
			},
			color : Alloy.Globals.soryinKwGrayColor
		});

		var subrow = Ti.UI.createTableViewRow({
			selectedBackgroundColor : 'transparent',
			layout : 'vertical',
			height : Titanium.UI.SIZE
		});

		subrow.add(subView);

		// 绘文字
		subrow.isSub = true;
		subrow.isOpen = false
		row.subrow = subrow;
		row.add(iconView);
		row.iconView = iconView;
		row.add(line);
		row.line = line;
		row.add(titleView);
		row.titleView = titleView;
		row.add(arrow);
		row.arrow = arrow;
		tableData[i] = row;
	}
//	table.height = tableHeight + (descs.length) * 60;
	table.setData(tableData);
	// 绑定事件
	bindTableEvent(table, options);
};
