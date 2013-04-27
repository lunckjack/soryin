/*
 * soryin ui
 */
var entypo = require('ti.entypo');
var ui = require('ui');
/**
 * 创建自定义TABLEViews
 */

//options
exports.createTableView = function(options) {
	//标题
	var titleArray = options.titleArray;
	//标题的颜色
	var titleColor = options.titleColor;
	//图标
	var iconArray = options.iconArray;
	//图标颜色
	var iconColor = options.iconColor;
	//是否有子布局
	var isHasSub = options.isHasSub;
	//子布局
	var subView = options.subView;
	//数据
	var tableData = options.tableData;
	//是否图标
	var isIcon = options.isIcon;
	var backGroundColor = options.backgroundColor;
	for ( i = 0; i < titleArray.length; i++) {
		var row = Ti.UI.createTableViewRow({
			height : '80dp',
			selectionStyle : Titanium.UI.iPhone.TableViewCellSelectionStyle.GRAY
		});
		row.isOpen = false;
		//标题
		var title = Ti.UI.createLabel({
			font : {
				fontSize : '25dp',
				fontFamily : 'HiraginoSansGB-W6',
			},
			text : titleArray[i],
			textAlign : "center",
			width : "200dp",
			left : '50dp',
			color : titleColor
		});

		var line = Ti.UI.createView({
			height : '80dp',
			left : '69.5dp',
			width : '1dp',
			backgroundColor : "#cecece"
		});

		var leftLabel;
		//图标或者文本
		if (isIcon) {
			//图标
			leftLabel = Ti.UI.createLabel({
				text : entypo.fromCodePoint(iconArray[i]),
				left : '5dp',
				textAlign : 'center',
				font : {
					fontSize : '50dp',
					opacity : '0.5',
					fontFamily : 'soryin'
				},
				color : iconColor
			});
		} else {
			//文本
			leftLabel = Ti.UI.createLabel({
				text : i + 1,
				left : '5dp',
				textAlign : 'center',
				font : {
					fontSize : '50dp',
					opacity : '0.5',
					fontFamily : 'soryin'
				},
				color : iconColor
			});
		}

		var arrow = Ti.UI.createImageView({
			image : '/imgs/utility/pointer.png',
			right : '10dp'
		});
		row.add(leftLabel);
		row.add(line);
		row.add(title);
		row.add(arrow);
		row.arrow = arrow;

		//子tableRow
		if (isHasSub) {
			var subrow = Ti.UI.createTableViewRow({
				selectedBackgroundColor : 'transparent',

			});
			subrow.isSub = true;
			subrow.add(subView);
			row.subrow = subrow;
		}
		tableData[i] = row;
	}
};

//绑定table事件
/**
 * //绑定事件
 * @param {Object} table
 */
exports.bindTableEvent = function(table) {
	var prevrow = 0;
	var isOpen = false;
	//table 点击事件
	table.addEventListener('click', function(e) {
		if (!e.row.isSub) {
			if (e.row.isOpen) {
				e.row.isOpen = false;
				isOpen = false;
				ui.rotate(e.row.arrow, 0, 250, function() {
				});
				table.deleteRow(e.index + 1);
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
				for ( i = 0; i < rows.length; i++) {
					if (rows[i].isOpen && i != e.index) {
						ui.rotate(rows[i].arrow, 0, 250, function() {
						});
						table.deleteRow(i + 1);
						rows[i].isOpen = false;
					}
				}
			}
		}
	});
}